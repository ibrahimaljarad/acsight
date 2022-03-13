import axios from "axios";

const BASE_URL = "http://c4f2.acsight.com:7770";

export const login = () => {
  const params = new URLSearchParams();

  params.append("username", "test2@acsight.com");
  params.append("password", "123456O");
  params.append("grant_type", "password");
  params.append("client_id", "ClientIdWithFullAccess");
  params.append("client_secret", "fullAccessSecret");

  return axios
    .post(
      "http://c4f2.acsight.com:7710/connect/token",

      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((user) => {
      const token = user.data.access_token;
      localStorage.setItem("jwtToken", token);
      return true;
    })
    .catch((err) => console.log(err));
};

export const getAllData = (params) => {
  return async (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    };

    await axios
      .get(`http://c4f2.acsight.com:7770/api/system/sms-provider-list`, {
        config,
      })
      .then((response) => {
        dispatch({
          type: "GET_SMS_DATA",
          allData: response.data.data.partnerProviders,

          params,
        });
      });
  };
};
