import * as yup from 'yup';

export const profileEditSkillSchema = yup.object().shape({
    perfilSkillVersao: yup
        .string()
        .required('Favor adicionar a versão da Habilidade'),
});
