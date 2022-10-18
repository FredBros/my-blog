function* numberOfPages({ total, limit }) {
  let page = 1;
  let offset = 0;

  while (offset < total) {
    yield page;

    page++;
    offset += limit;
  }
}

export default numberOfPages