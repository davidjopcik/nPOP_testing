import BasicFunction from "./BasicFunction"

class Sob {
    get sobOpenBtn() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/ll_evod_sob"]')
    }
    get sobVehiclesSelector() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/tv_fragment_evod_sob_report_title2" and contains(@text, "Vozidlá s vyskúšanou ručnou brzdou")]')
    } 
    get selectAll() {
        return $('//*[@text="OZNAČIŤ VŠETKO"]')
    } 
    get confirmVehiclesSob() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/iv_addremove_selection_confirm"]')
    }
    get confirmSob() {
        return $('//*[@resource-id="sk.prosoft.ptt.pop:id/btn_vcd_ticket_payment_confirm" and contains(@text, "POTVRDIŤ")]')
    } 



    async sob(){
        await this.sobOpenBtn.click()
        await this.sobVehiclesSelector.click()
        await this.selectAll.click()
        await this.confirmVehiclesSob.click()
        await this.confirmSob.click()
    }
    
    async sobPrintClose(){
        await BasicFunction.closeBtn()
    }


}

export default new Sob()