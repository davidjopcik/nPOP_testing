import BasicFunction from "./BasicFunction"

class TrainDeparture{
    get trainDepartureSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_departure"]')
    } 
    get departureTimeSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_layout_edittext_text" and contains(@text, "Čas odchodu")]')
    } 
    get departureTimeNowSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_activity_evod_train_log_close_time"]')
    }




    async trainDeparture(){
        await this.trainDepartureSelector.click()
        await expect(BasicFunction.confirmBtnSelector).toBeDisabled()
        await this.departureTimeNowSelector.click()
        await expect(BasicFunction.confirmBtnSelector).toBeEnabled()
        await BasicFunction.confirmBtnClick()


    }

}
export default new TrainDeparture()