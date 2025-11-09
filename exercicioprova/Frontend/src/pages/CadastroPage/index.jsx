// frontend\src\pages\CadastroPage\index.jsx
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import './styles.css';

const cadastroSchema = yup.object({
    nome: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: yup
        .string()
        .required("O email é obrigatório")
        .email("O email deve ser um email válido"),
    telefone: yup
        .string()
        .required("O telefone é obrigatório")
        .max(11, "O telefone deve ter no máximo 11 caracteres"),
})

function CadastroPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
        } = useForm({
        resolver: yupResolver(cadastroSchema),
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            nome: "",
            email: "",
            telefone: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            await api.post("/usuarios", data);
            toast.success("Usuário cadastrado com sucesso!");
            reset();
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            toast.error("Erro ao cadastrar usuário. Tente novamente.");
        }
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastro de Funcionários</h2>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome completo"
                        {...register("nome")}
                    />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seu.email@exemplo.com"
                        {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        {...register("telefone")}
                    />
                    {errors.telefone && <span>{errors.telefone.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cadastrando..." : "Cadastrar Funcionário"}
                </button>
            </form>
        </div>
    );
}

export default CadastroPage;