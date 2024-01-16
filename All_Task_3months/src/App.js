

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyFrom from "./Fromik_From/MyFrom";
import Todolist from "./To-Do-List/Todolist";
import Index from "./Calculater/Index";
import ReactCro from "./Image_cropeer/ReactImageCrop";
import Tags from "./React_tags/Tags";
import Wrapper from "./Words_Wrappe/Wrapper";
import Textlength from "./Words_Wrappe/Textlength"
import FromCurd from "./curd_reduxtoolkit/froms/FromCurd"
import EditPost from "./EditPost_butteryfly/EditPost"
import IdleTimerContainer from "./ideal-timer/IdleTimerContainer";
import Profilepage from "./profile_update/componats/Profilepage";
import DropdownExample from "./curd_reduxtoolkit/froms/FromCurd";
import Time from "./TimeZone/Time";
import Apps from "./Infinity/Tabel";
import Phone from "./Phone_Number/Phone";
import PhoneInput from "./Phone_Number/Phone";
import MyComponent from "./Phone_Number/Phone";
import EmojiPicker from "./Emoji/EmojiPicker";
import EmojiPickers from "./Emoji/EmojiPicker";
import Facebook from "./Emoji/Reaction";
import ChatApp from "./ChatApplication/Chat";
import From from "./MutipalAddress/From";
import User_Guide from "./User_Guide/User_Guide";
import MainFrom from "./MultiStepFrom/MainFrom";
import Name from "./MultiStepFrom/Componets/Name";
import FromStep from "./Stepe_from/FromStep";
import TabManager from "./User_Guide/User_Guide";
import Curd from "./Contextmenu/file";



function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<MyFrom/>}/>
        <Route path="/todo" element={<Todolist/>}/>
        <Route path="/calculator" element={<Index/>}/>
        <Route path="/img-cropper" element={<ReactCro/>}/>
        <Route path="/tags" element={<Tags/>}/>
        <Route path="/words-wrapper" element={<Wrapper/>}/>
        <Route path="/curd" element={<FromCurd/>}/>
        {/* <Route path="/curd" element={<DropdownExample/>}/> */}
        <Route path="/editpost" element={<EditPost/>}/>
        <Route path="/idle-timer" element={<IdleTimerContainer/>}/>
        <Route path="/profile-update" element={<Profilepage/>}/>
        <Route path="/time" element={<Apps/>}/>
        <Route path="/phone" element={<MyComponent/>}/>
        <Route path="/emoji" element={<EmojiPickers/>}/>
        <Route path="/chatApp" element={<ChatApp/>}/>
        <Route path="/Address" element={<From/>}/>
        <Route path="/UserGuide" element={<TabManager/>}/>
        <Route path="/stepFrom" element={<FromStep/>}/>
        {/* <Route path="/contextmenu" element={<Curd/>}/> */}
        {/* <Route path="/reaction" element={<Facebook/>}/> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
