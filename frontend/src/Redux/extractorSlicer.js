import { createSlice } from '@reduxjs/toolkit'

export const extractorSclier = createSlice({
  name: 'extracted',
  initialState: {
    // "insta": {
    //   "caption": "The festive season just got sweeter with @sunfeastbakedcreations ! 🎄✨ From crispy gingerbread cookies to indulgent Christmas spice croissants, their delightful gift boxes are the perfect way to spread joy and love this holiday season. 🥰🎁\n\nFlat 125/- off * \nT&C Apply\n\n#perfectchristmaksgift#sunfeastbakedcreations#gourmetdelights#gourmetexperience #itcsunfeastbakedcreations #christmas #celebration #madeforsmiles #sunfeastbakedcreations  #orderonline #ordernow #instafood #bangalore #bangalorefood",
    //   "hashtags": [
    //     "perfectchristmaksgift",
    //     "sunfeastbakedcreations",
    //     "gourmetdelights",
    //     "gourmetexperience",
    //     "itcsunfeastbakedcreations",
    //     "christmas",
    //     "celebration",
    //     "madeforsmiles",
    //     "orderonline",
    //     "ordernow",
    //     "instafood",
    //     "bangalore",
    //     "bangalorefood"
    //   ],
    //   "images": [],
    //   "vids": [
    //     "https://scontent-mia3-2.cdninstagram.com/o1/v/t16/f2/m86/AQMB3efJ0XkifpGq2dCgg1xLtsQFLZux4rlEliG2dRXuE12AsjSzpirfNVvnwQkPBjk4lWqMTfAoubl5-Jk5rWRpOakTYibrXXiiF_Y.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=102&vs=375395192296820_2133446928&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8wNzRGMUNCMjVDNDE4MEJFNTZENTMyOTJFQjVFNzA5Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOekhEUndudS1hYmhVTU5BTFdjZjFnSmlyeGZicV9FQUFBRhUCAsgBACgAGAAbABUAACboysmMqN3YPxUCKAJDMywXQEv1P3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&_nc_rid=04f29de693&ccb=9-4&oh=00_AYHCh4UokZprnbctu8htToE037YmRRiVob97i0CfK-uyrQ&oe=67DDCCEE&_nc_sid=10d13b"
    //   ],
    //   "imgpath": [],
    //   "vidspath": [
    //     "video_0.mp4"
    //   ],
    //   "audiotext": [
    //     " So guys, what are you gifting me for Christmas? No, no, this year you have to gift us something. Yes, you are gifting us this time. No excuses. Finch accepted. I have to think something unique and perfect for my friends. The ITC Sunfeest Gifting Hampers, exactly what I was looking for. Since you guys asked, I have the most special treat for you. The Gifting Hamper is filled with festive magic. Traditional plum cake, artisanal truffle and fudge box. Season's best Christmas gift box with a little bit of all delicious treats inside. The flakiest jingle spice Christmas croissant. Traditional plum cake. This Christmas, spread love and sweetness with ITC Sunfeast Bake Creation. Order yours now and make this holiday season extra special for your loved ones. ."
    //   ]
    // },
    images : [],
    "insta": {
      "caption": "",
      "hashtags": [],
      "images": [],
      "vids": [],
      "imgpath": [],
      "vidspath": [],
      "audiotext": []
    },
  },
  reducers: {
    setExtractedData: (state, action) => {
      state.insta = action.payload;
    },
    setAddImage: (state, action) => {
      console.log("adding " , action.payload)
    state.images.push(action.payload)
  },
  }
})

// Action creators are generated for each case reducer function
export const { setExtractedData, setAddImage } = extractorSclier.actions

export default extractorSclier.reducer