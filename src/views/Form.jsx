import React, { useRef, useState } from "react";
import "./Form.css";
const ReactForm = () => {
  const [gifData, setGifData] = useState([]);
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

  const handleSearch = async (e) => {
    // log your value here
    let searchVal = e.target.value;
    if (searchVal) {
      let jsonRes = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=3JrYNmDRfYwZj1fsiTiMN6aD1t7NHjnp&q=${searchVal}`
      );
      let res = await jsonRes.json();
      console.log(res.data);
      setGifData(res.data.slice(0, 16));
    } else {
      setGifData([]);
    }
  };
  const focusInput = (inputRef) => {
    inputRef.current.focus();
  };
  const debounce = (callback, delay) => {
    // add your debounce logic here
    let timelimit;
    return (...args) => {
      clearTimeout(timelimit);
      timelimit = setTimeout(() => {
        console.log("Search API triggered");
        callback.apply(this, args);
      }, delay);
    };
  };
  const debouncedSearch = debounce(handleSearch, 2000);
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
        <div className="gif_container">
          {gifData.length ? (
            gifData.map((gifObj) => (
              <div key={gifObj.id}>
                <img src={gifObj.images.fixed_height.url} alt="gif_img" />
              </div>
            ))
          ) : (
            <label className="search_label">Type something to search</label>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReactForm;
