export default function ErrorPage():JSX.Element {
  return(
    <>
      <h1 style={{textAlign: 'center'}}>
        Упс!
        <br/>
        Кажется,вы свернули куда-то не туда
      </h1>
      <a style={{color: 'green', marginLeft: 1175, fontWeight:'bold' }} href='/'>Вернуться на главную</a>
    </>
  );
}
