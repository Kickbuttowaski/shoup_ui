import React, { useRef } from "react";

const ReactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name : ${nameRef.current.value}`);
    console.log(`Email : ${emailRef.current.value}`);
    console.log(`Password : ${passwordRef.current.value}`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleSearch = (e) => {
    // log your value here
  };
  const focusInput = (inputRef) => {
    inputRef.current.focus();
  };
  const debounce = (callback, delay) => {
    // add your debounce logic here
  };
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input ref={nameRef} placeholder="name" type="text" />
        </label>
        <label>
          Email:
          <input ref={emailRef} placeholder="email" type="text" />
        </label>

        <label>
          Password:
          <input ref={passwordRef} placeholder="password" type="password" />
        </label>
        <hr />
        <button
          onClick={() => {
            focusInput(nameRef);
          }}
        >
          Focus Name Input
        </button>
        <button
          onClick={() => {
            focusInput(emailRef);
          }}
        >
          Focus Email Input
        </button>
        <button
          onClick={() => {
            focusInput(passwordRef);
          }}
        >
          Focus Password Input
        </button>
        <hr />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            onChange={debouncedSearch}
          />
        </label>
      </div>
    </React.Fragment>
  );
};

export default ReactForm;
