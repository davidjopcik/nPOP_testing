import Swipe from "./Swipe"

export let trainBreakingModeSelect

class Svod {
    get evodSvodBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_svod"]')
    }
    get vehicleWagonorderBreakpercentageSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/et_evod_vehicle_wagonorder_breakpercentage"]')
    }
    get trainBreakingModeSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_item_spinner_label" and contains(@text, "Režim brzdenia vlaku")]')
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



        // ----- TO DO ----
        expect(await this.confirmVehicleSvod).toBeDisabled()

        //Zadanie percent a režim brzdenia
        await this.vehicleWagonorderBreakpercentageSelector.setValue(vehicleWagonorderBreakpercentage)
        await this.trainBreakingModeSelector.click()
        trainBreakingModeSelect = await $('//*[@resource-id="android:id/text1" and contains(@text, "' + trainBreakingMode + '")]')
        console.log(await trainBreakingModeSelect.getText());
        await trainBreakingModeSelect.click()

        //POTVRDIŤ Enable
        if(!await this.confirmVehicleSvod.isDisplayed()){
            await Swipe.swipeUpAllScreen()
        }
        expect(await this.confirmVehicleSvod.isEnabled())

        //Brzdiace percentá sú nedostatočné
        await this.confirmVehicleSvod.click()
        if(await this.alertBrakingPercentagesInsufficient.isDisplayed()){
            await $('//*[@text="POTVRDIŤ"]').click()
        }
    } 

    async svodPrintClose(){
        await $('~Prejsť nahor').click()
    }
    

    }

export default new Svod()