import * as yup from 'yup';

export const profileSkillSchema = yup.object().shape({
    skillNome: yup
    .string()
    .required('Favor adicionar o nome da Habilidade'),
    perfilSkillVersao: yup
        .string()
        .required('Favor adicionar a versão da Habilidade'),
});
