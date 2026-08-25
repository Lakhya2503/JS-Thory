
fetch(
  "https://raw.githubusercontent.com/benoitvallon/100-best-books/refs/heads/master/books.json",
)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log("data : ", data);
  })
  .catch((err) => {
    console.error("error : ", err);
  })
  .finally(() => {
    console.log("finnally run the code data");
  });
