import BasicFunction from "./BasicFunction"
import Swipe from "./Swipe"

export let trainBreakingModeSelect

class Svod {
    get evodSvodBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_svod"]')
    }
    get vehicleWagonorderBreakpercentageSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_evod_vehicle_wagonorder_breakpercentage"]')
    }
    get vehicleWagonorderBreakpercentageInput() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/textinput_placeholder"]')
    }
    get trainBreakingModeSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_item_spinner_text" and contains(@text, "Režim brzdenia vlaku")]')
    } 
    get trainBreakingModeInput() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_item_spinner_text"]')
    } 
    get confirmVehicleSvod() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/b_evod_vehicle_wagonorder_confirm"]')
    }
    get alertBrakingPercentagesInsufficient() {
        return $('//*[@resource-id="android:id/message" and contains(@text, "Brzdiace percentá sú nedostatočné. Je potrebné znížiť rýchlosť vlaku.")]')
    } 




    async svod(vehicleWagonorderBreakpercentage, trainBreakingMode ){
        await this.evodSvodBtn.click()
        
        //POTVRDIŤ Disable
        if(!await this.confirmVehicleSvod.isDisplayed()){
            await Swipe.swipeUpAllScreen()
        }
        await this.confirmVehicleSvod.waitForDisplayed()

        //POTVRDIŤ Disabled
        await expect(this.confirmVehicleSvod).toBeDisabled()

        //Zadanie percent a režim brzdenia
        await this.vehicleWagonorderBreakpercentageSelector.setValue(vehicleWagonorderBreakpercentage)
        await this.trainBreakingModeSelector.click()
        trainBreakingModeSelect = await $('//*[@resource-id="android:id/text1" and contains(@text, "' + trainBreakingMode + '")]')
        await trainBreakingModeSelect.click()
        console.log(await this.trainBreakingModeInput.getText());


        //POTVRDIŤ Enable
        if(!await this.confirmVehicleSvod.isDisplayed()){
            await Swipe.swipeUpAllScreen()
        }
        await expect(this.confirmVehicleSvod).toBeEnabled()

        //Brzdiace percentá sú nedostatočné
        await this.confirmVehicleSvod.click()
        if(await this.alertBrakingPercentagesInsufficient.isDisplayed()){
            await $('//*[@text="POTVRDIŤ"]').click()
        }
    } 
    
    async svodPrintClose(){
        await BasicFunction.closeBtn()
    }

    }

export default new Svod()