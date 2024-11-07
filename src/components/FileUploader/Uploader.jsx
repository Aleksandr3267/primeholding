import {deleteFile, selectFileLoading, uploadSingleFile} from "../../store/fileSlice.js";
import {useDispatch, useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const Uploader = ({file, setFile}) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectFileLoading);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        dispatch(uploadSingleFile(file)).unwrap().then((res) => {
            if (res && res.id) {
                setFile(res);
                console.log("res", res);
            } else {
                setFile({});
            }
        });
    };

    const handleDeleteFile = () => {
        // eslint-disable-next-line react/prop-types
        dispatch(deleteFile(file?.id)).unwrap().then((res) => {
            setFile({});
        });
    }

    if (loading) {
        return (
            <div>
                <span className="contract-scan">Загрузка...</span>
            </div>
        );
    }

    return (
      <>
          {file && typeof file === 'object' && Object.keys(file).length > 0 ? (
            <label htmlFor="button-file" className="custom-file-input">
                <span className="contract-scan">Файл загружен</span>
                <button className="btn btn--delete" onClick={handleDeleteFile}>Удалить</button>
            </label>
          ) : (
            <>
                <label htmlFor="button-file" className="custom-file-input">
                    <span className="contract-scan">скан договора</span>
                </label>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  id="button-file"
                  type="file"
                  style={{display: 'none'}}
                  onChange={handleFileUpload}
                />
            </>
          )}
      </>
    );
}


export default Uploader;