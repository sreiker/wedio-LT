describe("Web automation real device", () => {
    it("Opening Website", async () => {
      browser.url("https://videoservicedev.on24.com/bkr/qa/index.html?control_server=https://videoservicedev.on24.com&conference=7172101825730719744&dev_controls=False&project=test_project&allow_virtual_backgrounds=True&mobile_presenter=False&allow_pip_mode=True&allow_raise_hand=True&skip_preview=False&allow_screensharing_granting&allow_fullscreen=False&disable_resume_timer=False&hide_leave_and_resume=False&hide_leave_button=False&hide_end_button=False&hide_expanded_menu=False&hide_remote_ban=False&hide_role_select=False&hide_rec_controls=False&hide_cancel_button=False&hide_start_session=False&hide_end_session=False&hide_settings_button=False&hide_participants_button=False&hide_mic_toggle=False&hide_camera_toggle=False&hide_zoom_button=False&name_display_setting=full_name&theme=default&name=Omar%7CHill&company_name=Apple&user_role=publisher&user_id_on24=1148340039")
    });

    it('should log a warning message in the browser console', () => {
      // Navigate to a webpage
      browser.url('https://google.com');

      // Execute JavaScript code in the browser context
      browser.execute(() => {
          // Log a warning message to the browser console
          console.warn('This is a warning message from WebDriverIO'); 
      });
      
      browser.pause(30000);

  });

    it("test console",async ()=>{
      console.log("wsfasf")
      console.error("asfsags")
      console.warn("sfsdgs")
    })
  });
  