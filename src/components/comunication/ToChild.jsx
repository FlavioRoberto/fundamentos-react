import ToFather from './ToFather';

const ToChild = () => {
  const getData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <ToFather title='Get data from child' onGetData={getData} />
    </div>
  );
};

export default ToChild;
