// när hash ändras
onhashchange = changePage;

// init (när vi först öppnar sidan)
changePage()


function changePage(){
  console.log('my page will be', location.hash);

  if(location.hash === "#page-1"){
    $('main').html('<h1>This is page 1</h1>');

  }else if(location.hash === "#page-2"){
    $('main').html('<h1>This is page 2</h1>');

  }else if(location.hash === "#page-3"){
    $('main').html('<h1>This is page 3</h1>');
    $('main').append('<p>Special feature 3</p>')

  }else{
    $('main').html('<h1>Welcome to default page</h1>');
  }

}
