namespace my.bookshop;

entity Books {
  key ID     : UUID;
      title  : String;
      author : String;
      stock  : Integer;
      pages  : Integer;
}
