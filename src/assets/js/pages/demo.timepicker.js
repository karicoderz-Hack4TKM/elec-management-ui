$("#timepicker").timepicker({
  showSeconds: !0,
  icons: { up: "mdi mdi-chevron-up", down: "mdi mdi-chevron-down" },
  appendWidgetTo: "#timepicker-input-group1",
}),
  $("#timepicker2").timepicker({
    showSeconds: !0,
    showMeridian: !1,
    icons: { up: "mdi mdi-chevron-up", down: "mdi mdi-chevron-down" },
    appendWidgetTo: "#timepicker-input-group2",
  }),
  $("#timepicker3").timepicker({
    showSeconds: !0,
    minuteStep: 15,
    icons: { up: "mdi mdi-chevron-up", down: "mdi mdi-chevron-down" },
    appendWidgetTo: "#timepicker-input-group3",
  });
