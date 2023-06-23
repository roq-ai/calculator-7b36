import * as yup from 'yup';

export const userProjectValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  project_id: yup.string().nullable(),
});
