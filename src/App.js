import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Colleges from './components/colleges/Colleges';
import { UserContextProvider } from './components/userContetx';
import NotFound from './components/Error/NotFound';
import StudentInfo from './components/StudentInfo/StudentInfo';
import MyAccount from './components/myaccount/MyAccount';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Blog from './components/blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/studentinfo" element={<StudentInfo />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
