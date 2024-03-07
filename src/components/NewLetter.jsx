import SendIcon from "@mui/icons-material/Send";

const NewLetter = () => {
  return (
    <div className="containers flex bg-[#fcf5f5] h-[60vh] items-center justify-center newslatters flex-col">
      <h1 className="newstitle text-[70px] mb-[20px]">NEWLATTERS </h1>
      <div className="news_description text-[24px] font-light mb-[20px]	">
        Get timely updated from your favourite products
      </div>
      <div
        className="inputContainer w-[50%] h-[40px] bg-white flex
        justify-between  "
        style={{ border: "solid 1px lightgray" }}
      >
        <input
          type="text"
          placeholder="please enter your text"
          className="  flex-[8]   pl-[20px]"
        />
        <button className="send flex-1 bg-[#3c8a8a] border-none  text-white ">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default NewLetter;
