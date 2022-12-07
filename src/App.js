import './App.css';
import Header from './component/Header';
import Comments from './Comments';
import Button from './Button';
import Reply from './component/Reply';

function App() {
  return (
    <div className='contaner'>
      <Header />
      <Comments />
      <Reply />
      <div className='btn-control'>
        <Button name={'Reply'} />
      </div>
    </div>
  );
}

export default App;
