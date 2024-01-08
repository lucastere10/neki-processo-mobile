
import * as yup from 'yup';

export const skillSchema = yup.object().shape({
    skillNome: yup
        .string()
        .required('Favor adicionar o nome da Habilidade'),
    perfilSkillVersao: yup
        .string()
        .required('Favor adicionar a descrição da Habilidade'),
});