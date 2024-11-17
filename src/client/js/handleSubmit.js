import axios from "axios";
import validate from "./checkUrl";

const input = document.querySelector("form input");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const results = document.querySelector("#results");

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!validate(input.value)) {
    show_error("Enter A Valid Url");
    return;
  }
  console.log(input.value);

  const { data } = await axios.post("http://localhost:5000", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { msg, sample } = data;
  if (msg) {
    show_error(msg);
    return;
  }
  show_results(sample);
};

const show_error = (msg) => {
  error.style.display = "block";
  error.innerHTML = msg;
};

const show_results = (sample) => {
  error.style.display = "none";
  results.innerHTML = `results: ${sample}`;
};

export default handleSubmit;
