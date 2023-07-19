import React, { useContext, useEffect, useState } from "react";
import DefautImage from "../../../../../../../assets/icons/image.png";
import PencilIcon from "../../../../../../../assets/icons/pencil-alt.png";
import EditIcon from "../../../../../../../assets/icons/edit.png";
import DeleteIcon from "../../../../../../../assets/icons/trash.png";
import { ContentContext } from "../../../../../../../contexts/ContentContext";
import Skeleton from "../../../../../ui/skeleton";
import DeleteModal from "../../../../../ui/modal";
import { IMAGE_PATH } from "../../../../../../../config/modules";

export default function ListContent(props) {
  const { onUpdate } = props;
  const { contents, fetchContent, deleteContent } = useContext(ContentContext);
  const [openModal, setOpenModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    fetchContent();
  }, []);

  const onHandleDelete = (id) => {
    setOpenModal(true);
    setIdToDelete(id);
  };

  const onCancelDelete = () => {
    setOpenModal(false);
    setIdToDelete(0);
  };

  const onConfirmDelete = () => {
    if (idToDelete > 0) {
      deleteContent(idToDelete);
      setOpenModal(false);
    }
  };

  return (
    <div className="overflow-auto rounded min-w-sm md:overflow-auto">
      {openModal && (
        <DeleteModal onClose={onCancelDelete} onConfirm={onConfirmDelete} />
      )}

      <table className="table-auto w-full">
        <thead className="bg-slate-100 rounded-t-2xl">
          <tr className="uppercase text-left">
            <th className="p-3">image</th>
            <th>titre</th>
            <th>date</th>
            <th>descritpions</th>
            <th>lien</th>
            <th>type</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody className="border border-1 rounded p-2">
          {contents.length > 0 ? (
            contents.map((content) => (
              <tr key={content.id}>
                <td className="p-2">
                  <img
                    src={
                      content.Picture.image
                        ? IMAGE_PATH +
                          "/pictures/images/" +
                          content.Picture.image
                        : // content.Picture.image
                          DefautImage
                    }
                    className="w-24"
                  />
                </td>
                <td>{content.Content.title}</td>
                <td>{content.Content.date}</td>
                <td>{content.Content.description}</td>
                <td>{content.Content.link ?? ""}</td>
                <td>{content.Content.isActuality ? "Actu" : "Historique"}</td>
                <td className="table-cell align-middle">
                  <div className="m-auto flex justify-center gap-7 sm:gap-3 sm:flex-col">
                    <img
                      src={EditIcon}
                      alt="edit"
                      className="w-7 cursor-pointer"
                      onClick={() => onUpdate(content.id)}
                    />
                    <img
                      src={DeleteIcon}
                      alt="delete"
                      className="w-5 cursor-pointer"
                      onClick={() => onHandleDelete(content.id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <Skeleton />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
