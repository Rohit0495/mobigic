import axios from "axios";
import React, { useState, useEffect } from "react";
const UploadFiles = () => {
  const [file, setFile] = useState();
  const [formdata, setFormData] = useState();
  const [allfiles, setAllfiles] = useState([]);
  const [mapFiles, setMapFiles] = useState([]);
  // const [FilesList, setFileList] = useState([])

  useEffect(() => {
    console.log(file);
  }, []);

  const handleSubmit = (e) => {
    console.log(file);
    e.preventDefault();
    const data = new FormData();
    data.append("image", file, file.filename);
    axios.post("http://localhost:8080/file", data);

    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/file")
      .then((res) => {
        setAllfiles(res.data);
      })
      .catch((err) => console.log(err));
    console.log(allfiles);
  }, []);

  const deleteFile = async (file_id) => {
    console.log(file_id);

    await axios
      .delete(`http://localhost:8080/file/${file_id}`)

      .then((res) => {
        alert("data deleted" + file_id);

        window.location.reload();
      })
      .catch((err) => alert(err));

    console.log("Data deleted");
  };

  return (
    <div>
      <div class="card m-3">
        <h5 class="card-header">Mobigic® Technologies Private Limited</h5>
        <div class="card-body">
          <form encType="multipart/form-data">
            <p class="card-text"> Upload file below</p>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              class="btn"
            />{" "}
            <br />
            <button class="btn btn-primary m-3 w-5" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div class="card-footer">
          {allfiles.map((data) => {
            return (
              <div className="w-25 p-3">
                <h4>File ID : {data.file_id}</h4>
                <div className="">
                  <a
                    href={`http://localhost:8080/image/${data.pimage}`}
                    className="btn btn-primary"
                    download={true}
                  >
                    <img
                      src={`http://localhost:8080/image/${data.pimage}`}
                      alt=""
                      className="img-thumbnail"
                    />
                  </a>

                  <button className="btn btn-primary m-1">Download</button>

                  <button
                    className="btn btn-primary m-1"
                    onClick={() => deleteFile(data.file_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
