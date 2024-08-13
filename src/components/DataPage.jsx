import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import logo from '../logo-2.png';
import logo2 from '../logo_default_dark.png';

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
        fetch('/data.json')
            .then((response) => response.json())
            .then((jsonData) => {
                // Set the data based on ref_no
                const itemData = jsonData[bruteForceKey];
                setData(itemData);
            })
            .catch((error) => console.error('Error fetching the data:', error));
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
                            <p>Başvuru No:<b>48540/2024</b></p>
                            <p>Başvuru Tipi:<b>Ön İzin Başvurusu</b></p>
                            <p>Çalışan (İşçi) Ad Soyad:<b>MOHAN UDDIN</b></p>
                            <p>Çalışan (İşçi) Pasaport No:<b>A07747513</b></p>
                            <p>Çalışan (İşçi) TC Kimlik No:<b></b></p>
                            <p>Çalışan(İşçi) Anne Adı:<b>LOTEFUN NAHAR</b></p>
                            <p>Çalışan(İşçi) Baba Adı:<b>AIYUB ALI</b></p>
                            <p>Belge Geçerlilik Başlangıç Tarihi:<b>3.04.2024</b></p>
                            <p>Belge Geçerlilik Bitiş Tarihi:<b>3.05.2024</b></p>
                            <p>Onay Durumu:<b>Evet</b></p>
                            <p>Onay Tarihi:<b>21.03.2024</b></p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>

            </div>
        </div>


    );
}

export default DataPage;
