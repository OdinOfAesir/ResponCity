const baseUrl = "https://api-auth.prod.birdapp.com/api/v1/";
const loginPath = "auth/email";
const birdsPath = "bird/nearby";
const appVersion = '4.53.0'
const tlvLatLng = { latitude: 32.079554, longitude: 34.781133 }

function getBirdData() {

    const email = randomString() + '@test.com'
    const device = uuidv4();
    console.log(device);
    const token = login(email, device);
    // const data = await getBirds(device, token, tlvLatLng);

    // return data;
};

const login = async (email, device) => {
    axios({
        method: 'post',
        url: baseUrl + loginPath,
        headers: {
            'Device-Id': device,
            'Platform': 'ios',
            'App-Version': appVersion,
        },
        data: {
            'email': email,
        }
    }).then(data => console.log(data));
};

const randomString = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }