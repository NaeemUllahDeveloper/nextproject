import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import logo from '../logo-2.png';
import logo2 from '../logo_default_dark.png';
import jsonData from "../assets/data.json"

import { useLocation } from 'react-router-dom';


function DataPage() {
    // const { ref_no } = useParams();  // Get the ref_no from the URL
    const [data, setData] = useState(null);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const eqeq = queryParams.get('eqeq');
    const refNo = queryParams.get('ref_no');
    const bruteForceKey = queryParams.get('BruteForceKey');
    useEffect(() => {
        setData(jsonData[bruteForceKey]);
    });



    if (!data) {
        return <p></p>;
    }

    return (
        // <div>
        //   <h1>{data.title}</h1>
        //   <p>{data.description}</p>
        // </div>

        <div className="m-content">
            <div className="row">

                <div className="col-lg-12">
                    <p align="center">
                        <img align="middle" width="100" height="100" src={logo} alt="Logo 2" />
                    </p>

                    <p align="center">
                        <img align="middle" src={logo2} alt="Logo Default Dark" />
                    </p>
                </div>

                <div className="col-lg-3"></div>

                <div className="col-lg-6">
                    <div className="m-portlet m-portlet--mobile m-portlet--body-progress-">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        Kare Kod Validasyonu (QR Code Validation)
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">

                            <h2 className="m--font-success">Bilgiler</h2>

                            <table>
                                <tr>
                                    <td></td>
                                    <td>
                                        <img
                                            width="90"
                                            height="120"
                                            style={{ imageOrientation: 'from-image' }}
                                            src={data.img}
                                            alt="Worker Passport"
                                        />
                                    </td>
                                </tr>
                            </table>
                            Başvuru No:<b>{data.application_no}/2024</b><br />
                            Başvuru Tipi:<b>Ön İzin Başvurusu</b><br />
                            Çalışan (İşçi) Ad Soyad:<b>{data.name}</b><br />
                            Çalışan (İşçi) Pasaport No:<b>{data.passport_no}</b><br />
                            Çalışan (İşçi) TC Kimlik No:<b></b><br />
                            Çalışan(İşçi) Anne Adı:<b> {data.mother_name}</b><br />
                            Çalışan(İşçi) Baba Adı:<b> {data.father_name}</b><br />
                            <br /><br />
                            Belge Geçerlilik Başlangıç Tarihi:<b>{data.validity_start_date}</b><br />
                            Belge Geçerlilik Bitiş Tarihi:<b>{data.validity_end_date}</b><br />
                            Onay Durumu:<b>Evet</b><br />
                            Onay Tarihi:<b>{data.approval_date}</b><br />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>

            </div>
        </div>


    );
}

export default DataPage;
