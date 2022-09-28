import BasicFunction from "./BasicFunction"
import HelpFunctions from "./HelpFunctions"

export let alertMsgTrainTimeDeparture
export let trainDepartureTime

class TrainDeparture{

    get departureTimeSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_layout_edittext_text" and contains(@text, "Čas odchodu")]')
    } 
    get departureTimeNowSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_activity_evod_train_log_close_time"]')
    }




    async trainDeparture(){
        await expect(BasicFunction.confirmBtnSelector).toBeDisabled()
        await this.departureTimeNowSelector.click()

        await expect(BasicFunction.confirmBtnSelector).toBeEnabled()
        await BasicFunction.confirmBtnClick()

         // ---- TO DO ----
         alertMsgTrainTimeDeparture = await $('//*[@resource-id="android:id/message" and contains(@text, "Zadaný dátum a čas odchodu vlaku nesmie byť menší ako plánovaný dátum a čas odchodu z vých. DB")]').getText()
         console.log(alertMsgTrainTimeDeparture);

         trainDepartureTime = await HelpFunctions.timeDepartureFromAlert(alertMsgTrainTimeDeparture)
         console.log(trainDepartureTime);

         
         // ---- TO DO ----
 


    }

}
export default new TrainDeparture()