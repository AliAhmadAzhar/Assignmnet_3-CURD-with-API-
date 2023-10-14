import React from "react";

const UploadFile = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && (
        <div>
            <button className="UploadFileButton">UploadFile</button>
        </div>
      )}
    { !toggle && (<div>
        

    </div>)}

    </div>
  );
};

export default UploadFile;
