import { StyleSheet, Platform } from "react-native";

const S = StyleSheet.create({
  /* ── root / screen ── */
  root: { flex: 1 },
  screen: { flex: 1 },

  /* ── header ── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: Platform.OS === "ios" ? 58 : 50,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  hSlot: { width: 72, flexDirection: "row", alignItems: "center" },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.15,
  },
  backRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  backTxt: { fontSize: 13, fontWeight: "500" },

  /* ── chevron (back arrow) ── */
  chevronWrap: { width: 16, height: 16, justifyContent: "center", alignItems: "center" },
  chevronInner: {
    width: 7,
    height: 7,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{ rotate: "45deg" }],
  },

  /* ── cart icon ── */
  cartHandle: { width: 12, height: 6, borderWidth: 2, borderBottomWidth: 0, borderRadius: 4 },
  cartBasket: { borderWidth: 2, borderTopWidth: 0, borderRadius: 4, marginTop: 2 },
  cartWheels: { flexDirection: "row", justifyContent: "space-around", width: 16, marginTop: 3 },
  cartWheel: { width: 5, height: 5, borderRadius: 3, borderWidth: 2 },

  /* ── sun icon ── */
  sunWrap: { width: 14, height: 14, alignItems: "center", justifyContent: "center" },
  sunCore: { width: 6, height: 6, borderRadius: 3 },
  ray: { width: 2, height: 3, borderRadius: 1, position: "absolute" },
  rayDiag: { width: 2, height: 3, borderRadius: 1, position: "absolute" },

  /* ── moon icon ── */
  moonWrap: { width: 14, height: 14, overflow: "hidden" },
  moonFull: { width: 14, height: 14, borderRadius: 7 },
  moonMask: { width: 11, height: 11, borderRadius: 5.5, position: "absolute", top: -2, left: 5 },

  /* ── toggle switch ── */
  track: { width: 44, height: 24, borderRadius: 12, paddingHorizontal: 2, justifyContent: "center" },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  /* ── badge ── */
  badge: {
    position: "absolute",
    top: -6,
    right: -7,
    width: 17,
    height: 17,
    borderRadius: 8.5,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { fontSize: 10, fontWeight: "700" },

  /* ── category tag ── */
  catTag: { borderRadius: 20, paddingHorizontal: 9, paddingVertical: 2 },
  catTagTxt: { fontSize: 10, fontWeight: "600", letterSpacing: 0.3 },

  /* ── product avatar ── */
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  avatarTxt: { fontSize: 13, fontWeight: "700", letterSpacing: 0.5 },

  /* ── scroll ── */
  scroll: { flex: 1 },
  scrollPad: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 8 },

  /* ── hero banner ── */
  hero: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 24,
    marginBottom: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  heroTitle: { fontSize: 26, fontWeight: "800", letterSpacing: -0.3, marginBottom: 4 },
  heroSub: { fontSize: 14 },

  /* ── section label ── */
  sectionLbl: { fontSize: 11, fontWeight: "600", letterSpacing: 1.4, marginBottom: 12 },

  /* ── product card ── */
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardBody: { flex: 1, minWidth: 0 },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 3,
    flexWrap: "wrap",
  },
  cardName: { fontSize: 14, fontWeight: "700" },
  cardDesc: { fontSize: 12, marginBottom: 4 },
  cardPrice: { fontSize: 15, fontWeight: "800" },
  addBtn: { borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8, flexShrink: 0 },
  addBtnTxt: { fontSize: 13, fontWeight: "700" },

  /* ── sticky bar ── */
  stickyBar: { borderTopWidth: 1, paddingHorizontal: 16, paddingVertical: 14 },

  /* ── pill button ── */
  pillBtn: { borderRadius: 14, paddingVertical: 14, alignItems: "center", justifyContent: "center" },
  pillBtnAuto: { alignSelf: "center", paddingHorizontal: 30 },
  pillRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  pillTxt: { fontSize: 15, fontWeight: "700" },

  /* ── cart row ── */
  cartRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cartText: { flex: 1, minWidth: 0 },
  cartName: { fontSize: 14, fontWeight: "700", marginBottom: 1 },
  cartUnit: { fontSize: 12 },
  qtyRow: { flexDirection: "row", alignItems: "center", gap: 8, flexShrink: 0 },
  qtyNum: { fontSize: 16, fontWeight: "700", minWidth: 20, textAlign: "center" },
  cartSubtotal: { fontSize: 14, fontWeight: "800", minWidth: 62, textAlign: "right", flexShrink: 0 },

  /* ── qty circle button ── */
  qtyCircle: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  qtyBar: { width: 12, height: 2, borderRadius: 1 },
  qtyBarV: { width: 2, height: 12, borderRadius: 1, position: "absolute" },

  /* ── cart footer ── */
  cartFooter: { borderTopWidth: 1, paddingHorizontal: 16, paddingVertical: 14, gap: 12 },
  totalStrip: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  totalLbl: { fontSize: 14, fontWeight: "500" },
  totalVal: { fontSize: 20, fontWeight: "800" },

  /* ── checkout card ── */
  coCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  coCardTitle: { fontSize: 14, fontWeight: "700", marginBottom: 14, letterSpacing: 0.2 },

  /* ── checkout row ── */
  coRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  coText: { flex: 1 },
  coName: { fontSize: 13, fontWeight: "700", marginBottom: 1 },
  coQtyTxt: { fontSize: 12 },
  coPrice: { fontSize: 14, fontWeight: "800", minWidth: 64, textAlign: "right" },

  /* ── price breakdown ── */
  bRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 7 },
  bLbl: { fontSize: 14 },
  bVal: { fontSize: 14, fontWeight: "600" },
  divLine: { borderTopWidth: 1, marginVertical: 10 },
  grandLbl: { fontSize: 16, fontWeight: "800" },
  grandVal: { fontSize: 19, fontWeight: "800" },

  /* ── free shipping banner ── */
  freeBanner: { borderRadius: 12, padding: 12, alignItems: "center" },
  freeBannerTxt: { fontSize: 13, fontWeight: "600" },

  /* ── empty state ── */
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 32,
  },
  emptyRing: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: { fontSize: 20, fontWeight: "700" },
  emptySub: { fontSize: 14, textAlign: "center" },
});

export default S;
