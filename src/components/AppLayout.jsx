import React, { useState, useEffect } from "react";
import { Card, Tabs, Row, Col, Radio } from "antd";
import axios from "axios";
import "./AppLayout.css"; // Add some basic styles here

 const { TabPane } = Tabs;

const BASE_URL = 'https://risapi.mrbiller.com.au/api';
const API_KEY='Vm94ZWwgcmFkaW9sb2d5';

const AppLayout = () => {
    const [data, setData] = useState([]);
    
    const extractDataFromToken = (token) => {
        if (!token) return null;
      
        const base64Url = token.split(".")[1]; // Get the payload part
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      
        try {
          const decodedData = JSON.parse(atob(base64)); // Decode and parse it
          return decodedData;
        } catch (error) {
          console.error("Invalid token:", error);
          return null;
        }
      };

    const token = localStorage.getItem("authToken");
    const extractedData = extractDataFromToken(token);
    // console.log("Extracted Data:", extractedData);

    useEffect(() => {
        const fetchUserSettings = async () => {
        try {
        //    const token = localStorage.getItem("authToken")
            // fetch user details using token
        const response = await axios.post(`${BASE_URL}/Settings/GetUserSettingsByUserId/${extractedData.UserId}`, 
            {},
            {
                headers: {
                    "RIS-API-KEY": API_KEY,
                },
        });

        setData(response.data?.data.result.settings);
    } catch (error) {
            console.error(error);
        } 
    }
        fetchUserSettings();
    }, [extractedData.UserId])

//    console.log(data)



  

    function callback(key) {
    console.log(key);
    }

  return (

            <Card title="Settings" style={{borderRadius: '20px'}}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Storage" key="1">
                        <Card title="S3 storage credentials">
                            <p>Before enabling S3/Wasabi, make sure you upload the whole "upload/" folder to your bucket. Before disabling S3/Wasabi, make sure you download the whole "upload/" folder to your server.</p>
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Radio value={"wasabi"}>Enable Wasabi S3 storage</Radio>
                                </Col>
                                <Col span={12}>
                                <Radio value={"amazon"}>Enable Amazon S3 storage</Radio>
                                </Col>
                            </Row>
                                <br/>
                               <Row gutter={24}>
                                <Col span={12}>
                                    <Card key={data.id}>
                                        {data.s3_bucket}
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card key={data.id}>
                                        {data.s3_accesskey}
                                    </Card>
                                </Col>
                            </Row> <br/>
                            <Row gutter={24}>
                            <Col span={12}>
                                <Card key={data.id}>
                                    {data.s3_bucket}
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card key={data.id}>
                                    {data.s3_accesskey}
                                </Card>
                            </Col>
                        </Row>  
                        </Card>
                    </TabPane>
                    <TabPane tab="Communication" key="2">
                        <Card>Content of Tab Pane 2</Card>
                    </TabPane>
                </Tabs>
            </Card>
       
     
  );
};

export default AppLayout;
