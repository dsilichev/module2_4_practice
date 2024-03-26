import { useState } from "react";
import Select from 'react-select';
import styles from '../app.module.css';

export const SelectComponent = () => {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(null);
  let error = null;

  const onLoginChange = ({ target }) => {
    setLogin(target.value);

    

    if (!/^[\w_]*$/.test(target.value)) {
      error = 'Неверный логин. Используйте символы - буквы, цифры и нижнее подчеркивание';
    } else if (target.value.length > 20) {
      error = 'Неверный логин. Максимальная длина 20 символов';
    }

    setLoginError(error);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(login);
  }

  const onLoginBlur = () => {
    if (login.length < 3) {
      setLoginError('Минимальная длина логина 3 символа');
    }
  }

  const productOptions = [
    { value: "laptop", label: 'Ноутбук' },
    { value: "tv", label: 'Телевизор' },
    { value: "smartphone", label: 'Смартфон' },
  ]

  const colorOptions = [
    { value: "black", label: 'Черный' },
    { value: "white", label: 'Белый' },
    { value: "silver", label: 'Серебристый' },
  ]

  const [selectedProducts, setSelectedProducts] = useState('tv');
  const [selectedColors, setSelectedColors] = useState(['black', 'silver', 'silver']);

  const onSelectedProductChange = (({ target }) => {
    setSelectedProducts(target.value);
  });

  const onSelectedColorChange = (({ target }) => {
    const newSelectedColors = [...target.selectedOptions].map(selectedOption => selectedOption.value);
    setSelectedColors(newSelectedColors);
  });

  return (
    <div>
      <select value={selectedProducts}
        onChange={onSelectedProductChange}>
        <option value="tv">Телевизор</option>
        <option value="smartphone">Смартфон</option>
        <option value="laptop">Ноутбук</option>
      </select>
      <select multiple={true}
        value={selectedColors}
        onChange={onSelectedColorChange}>
        <option value="black">Чёрный</option>
        <option value="white">Белый</option>
        <option value="silver">Серебристый</option>
      </select>
      <Select options={productOptions} defaultValue={productOptions[0]} />
      <Select options={colorOptions} defaultValue={[colorOptions[0], colorOptions[1]]} isMulti={true} />

      <form onSubmit={onSubmit}>
        {loginError && <div className={styles.errorLabel}>{loginError}</div>}
        <input name="login" type="text" value={login} placeholder="Логин" onChange={onLoginChange} onBlur={onLoginBlur}/>
        <button type="submit" disabled={loginError !== null}>Отправить</button>
      </form>
    </div>
  )
}
