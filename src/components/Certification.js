import React from "react";
import { FaAws } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Certification = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className="d-flex">
        <FaAws className="certification_icon" />
        <div className="d-flex flex-column">
          <h4>{t('certification_title1')}</h4>
          <p>
            Qui dicta minus molestiae vel beatae natus eveniet ratione
            temporibus
          </p>
        </div>
      </div>
      <div className="d-flex">
        <FaAws className="certification_icon" />
        <div className="d-flex flex-column">
          <h4>{t('certification_title2')}</h4>
          <p>
            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
            tempore recusandae
          </p>
        </div>
      </div>
    </>
  );
};

export default Certification;
