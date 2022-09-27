import HomeScreen from "../Methods/HomeScreen";
import OpenApp from "../Methods/OpenApp";

export let EinLicence_data = {
    userName: "89",
    password: "Aa123456",
    role: "Sprievodca POP vo Vlaku",
    trainNumber: "612",
    vehicles: "955678120028",
    HKVType: "V - vlakové",
    trainDriverNumber: "1714",
    vehicleWagonorderBreakpercentage: "85",
    trainBreakingMode: "R+Mg"
}

let e = EinLicence_data

describe('Check EIN licence', () => {
   
    it('Otvorenie app', async () => {
        await OpenApp.restarteApp()
    });

    it('Login',async () => {
        await HomeScreen.Login(e.userName, e.password, e.role)
    });
   
});