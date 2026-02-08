namespace my.bookshop;

entity Books {
  key ID     : UUID;
      title  : String not null;
      author : String not null;
      stock  : Integer not null;
      pages  : Integer not null;
}
