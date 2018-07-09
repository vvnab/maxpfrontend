export default {
  'server_error': new Error('Сервер не доступен'),
  'wrong_email_or_password': new Error('Имя пользователя или пароль введены не верно'),
  'wrong_email': new Error('Неверный адрес электронной почты'),
  'wrong_password': new Error('Длина пароля минимум 5 символов')
}