import { useNavigate } from "react-router-dom";
import ShieldCheck from "../svg/shield-check";
import listingHouse1 from "@/assets/images/listing-house-1.jpg";

type props = {
    data: {
        image?: string;
        title?: string;
        price?: string | number;
        location?: string;
        specs?: string;
        parking?: string | boolean;
        garden?: string | boolean;
        security?: string | boolean;
        electricity?: string | boolean;
        date?: string;
        link?: string;
    };
};

// eslint-disable-next-line react-refresh/only-export-components
export const MockHouseCardData = [
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ/SURBVDjLbVJBaxNBGH2bpEkTmxi1NTRKTZtoQUHEWz0Igj2I4kG9eVNQhEBO7bEHc+yv8JAiHnr2B4gFqVrQRhObljQolBSTJqZJdnZmfbNr2rU68DEz33zfm/fejGHbNrxjaWlpRCk1J6WcYZxkgPGTsWJZ1mIul/vlrTe8AIVC4Qqbl5PJ5GQsFoPP5wP36PV6qNfr2OIg0L35+fm1fwDYPMLDj+l0OmOaJmq1Gjqdjr4dgUAAiUTCqSsWixvMXV5YWOjqvW+AxOSz8fHxjBAC5XJ5s91up7gO6tDrUqn0QwOTXYZSsoO+wGDB5EwkEkGlUgGb7mSz2apHajWfz9+sVqvFVCrl1P4PYExr5m16vYUjQ+c0O11DtmN/ebD95pG9UpnGzl7Y0Xz30ir8toAtLdiWG0JIvFi76piaGG7g9plVTD/5YLgMCPLg/g0YtMTwhznfApRBfsP6kAYJSKuN57Md5oXTsvHy7aEEfZMutHZfIRAahWGMsHAICMeZVsD+HmTrG8zudyhrH+HJLGyz7wEgRSh9k4nm+nvqPIb4xWuovV5k/2lMXJ9F8+s6ARqIpk6QsIQtTC+AcGTYpBqfvgBfcJTuKMi+xKfdMCZgIp6eRK8TYu2+w2oA4PwDm+5qVK218XmNLN7xxILqKfS7pGqTWekLmuVtV65STs8hA73RqJQQP5+CP3KKACamHj7FlGBDawfH00kEW0MuA8o9AmA6qMrSHqwTIAoM08hAkHkN0ES3UYfotBGdiNFu5cr2AmgJobOPET7nhxEMuU/o40soSjO7iHbbVNgnUen6pY0/AOCTbC7PuV44H0f8Cetg5g9zP5aU7loDcfwGcrKyzYdvwUUAAAAASUVORK5CYII=",
        title: "Morning",
        price: 966622,
        location: "Suite 82",
        specs: "Total",
        parking: true,
        garden: false,
        security: false,
        electricity: false,
        date: "8/8/2024",
        link: "http://blinklist.com/dui/maecenas/tristique/est/et/tempus.png?velit=volutpat&eu=eleifend&est=donec&congue=ut&elementum=dolor&in=morbi&hac=vel&habitasse=lectus&platea=in&dictumst=quam&morbi=fringilla&vestibulum=rhoncus&velit=mauris&id=enim&pretium=leo&iaculis=rhoncus&diam=sed&erat=vestibulum&fermentum=sit&justo=amet&nec=cursus&condimentum=id&neque=turpis&sapien=integer&placerat=aliquet&ante=massa&nulla=id&justo=lobortis&aliquam=convallis&quis=tortor&turpis=risus&eget=dapibus&elit=augue&sodales=vel&scelerisque=accumsan&mauris=tellus&sit=nisi&amet=eu&eros=orci&suspendisse=mauris&accumsan=lacinia&tortor=sapien&quis=quis&turpis=libero&sed=nullam&ante=sit&vivamus=amet&tortor=turpis&duis=elementum&mattis=ligula&egestas=vehicula&metus=consequat&aenean=morbi&fermentum=a&donec=ipsum&ut=integer&mauris=a&eget=nibh&massa=in&tempor=quis&convallis=justo&nulla=maecenas&neque=rhoncus&libero=aliquam&convallis=lacus&eget=morbi&eleifend=quis&luctus=tortor&ultricies=id&eu=nulla&nibh=ultrices&quisque=aliquet&id=maecenas&justo=leo&sit=odio&amet=condimentum&sapien=id&dignissim=luctus&vestibulum=nec&vestibulum=molestie&ante=sed&ipsum=justo&primis=pellentesque&in=viverra&faucibus=pede&orci=ac&luctus=diam&et=cras&ultrices=pellentesque&posuere=volutpat&cubilia=dui&curae=maecenas&nulla=tristique&dapibus=est&dolor=et",
        id: "7bbf:40d7:9349:2361:a554:f66a:3f30:7929/89",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALcSURBVDjLbZNrSFNxGIcPCJNBIAQRISRGYQWF0g27OJgQVmQFmpViZHhLaiaGeCtTQ1OW09QtS83NiR2XF0bZZZjKXNYq8kMUBX7qU30JIsM68+ldUpH64eXA4f/83ud9z/krgPJfjbVFSZkZsb5grEXDY9F4WP+C4Stm+i9GLTy/EC4QcIZnvTA1JOWG14Mw4YDRFnBdmEHNL1gcMNamY/TGMJPd8Molh61wvxbpCoPl0F8EQxdh5BoMlMDN1GGsybp/ASNWC88EDgY8rNcENIqu/m8nZ54ee6aRjnQNl4Q5csGy3zwfMNKyiSdNGpM90rFGY7AigoHSZaJbLbo+unN92DOqsR1fxo2kCK4f1FBlijqDRu3OjQqPzRa8HaJnCeoaGSgKp69gmntV0JsPPWfkeR5sh6dp2hdOvdEoIXArDapjzIrovsPXPT+bq1Avun24LyO6Km3HDDQfNoiuiiNLusb1URerp3ILYgYlUW8U0Z3FJ1tW84MvQ0R3BkcOomvw+/2JXq93o+gaiuyxZHbGQMXmEErXg/OsBKz5oojuLN52WUxmcLt6bClB3U/0mnYL/NPj8fygNSnhXHtM4LL7BCk2gUvWzo9WFvlVke1+4O4FRHdGdHWiGxfcrsm5B1N3LLn2bWS0R8+VDSSj+hsp7DtEQsNK5mq3BgNkBNtxk+hmyWLC/nw26bw8z7GDwVet3H3Z/Bvs9VuweArpelpHjnMv22tCtUBZ5FFl0a8sJdqtp2XeIHztkYmrD/K4cj+LCvcpKu9lYxuvIu32btZdUmaXgqPdbncg9eYG7jy34Jw00+Wro2OiVkLOYB2vJMuZQGS58ja8WNEvChDYo6rq9yPWNXP7GsMD8Q0rArvqw+bSO3fSOlZBhmMvEeXK1KpiJXTRZRL4gMAf7XZ72cLgzVW6bye74llbEvpeYN2St1HgNoETl9qLKH9eXRrC6ZyMg9nZ2SF/3v8CIIKyHGFPw/kAAAAASUVORK5CYII=",
        title: "Chive",
        price: 614100,
        location: "6th Floor",
        specs: "database",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "4/30/2024",
        link: "http://ucoz.ru/augue/vel/accumsan/tellus.xml?id=pretium&sapien=iaculis&in=justo&sapien=in&iaculis=hac&congue=habitasse&vivamus=platea&metus=dictumst&arcu=etiam&adipiscing=faucibus&molestie=cursus&hendrerit=urna&at=ut&vulputate=tellus&vitae=nulla&nisl=ut&aenean=erat&lectus=id&pellentesque=mauris&eget=vulputate&nunc=elementum&donec=nullam&quis=varius&orci=nulla&eget=facilisi&orci=cras&vehicula=non&condimentum=velit&curabitur=nec&in=nisi&libero=vulputate&ut=nonummy&massa=maecenas&volutpat=tincidunt&convallis=lacus&morbi=at&odio=velit",
        id: "348d:5ff1:5527:59c7:8b1:ce8a:bfb5:9e5d/88",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALoSURBVDjLbVNbSJNhGH7+7z9scyqepi6JobKmE5ZigSWpYV5UskYZkRJk0lVeVN5GF96EF0kXZXRVFHWTKynqKijFQmvqTYRMcWuYodtS59zxP/T9vwdc9P08vP93eJ738L0foygKdkbb7bHLhlxdF2HQSqcM/RJQGEiSqFsNK0PjA429+GcwewVO3fmcetZbzxOqsLOs2mA0hReeNSz5EvE5rzd/9P7p5A6H7FVjWSLyLIFvlYN/jcVcmMGPFaDcZITr0D6UW/UGLtf4eC8nQ0BRw95eJAyzi99/4rBkp3H1SCFYnj3/X4H+/n4DlSBqyByrggFLU1HtPI1kMiBCx7NgOEbu7u42ZAhQcg81K9S9oKbOMUTb4CmZoxHoBBZ6CoWu0oiEZDK50tHR0aOlTQhpM5vNL5ubm4WxnwrOHDYjlqaeKFGR1VSo6qYHBeEnMBTWYsSzipsd9cLy8rJzcHDwC0dF7jY0NKC4uBgHIw9wb+B9xjXxrIz22kWYatox7r6F+oQJVus1uFwuBAKBh6qAzW63a4edTidsNluGwGbgLa1DNXLNdagqGUGptQ1FRUUahoeHKzhJkgQK7bDf79c2QqHQVoHEEAwr71BxtBNS5A1M9k6EJl5DTJ8EQ1isr68zRBRFLCwsaFCJtECIRqMUG7SDPqK46iyQmMbXp8+RnRdHVtKHec/ILodLp9NYXFzUPMZiMaiCqVQKurQfBUYeOfkx6t0HtaJS9BvKW/ow++ERopZcBIPBLQGVoA69Xg+3200rr6DRNI28E5cgxyYpN476czbIqSXojV6Yba2Y932CyiWULEciEU1ATaG6xoHjjhxU1rQgKycERQzT/mQx9cpLT8iQE16YDlhAfo2hNEcB63A4ymZnZ4WZmZmSzeou3LjQhLWJAViaroPQlmT4/SD6KpTVHdMsI1SCM1qhy7YgPzz6PeM1XhmalDjaWhc3+sBK9CXLyjbkbWz9EykZhzpXlKm/wwxDbisZJhAAAAAASUVORK5CYII=",
        title: "Petterle",
        price: 412605,
        location: "1st Floor",
        specs: "definition",
        parking: true,
        garden: true,
        security: false,
        electricity: false,
        date: "6/4/2024",
        link: "https://blog.com/proin/interdum/mauris/non/ligula/pellentesque.png?posuere=justo&metus=pellentesque&vitae=viverra&ipsum=pede&aliquam=ac&non=diam&mauris=cras&morbi=pellentesque&non=volutpat&lectus=dui&aliquam=maecenas&sit=tristique",
        id: "9cfd:3c1f:f6c3:9194:2780:43f1:46f4:8d80/52",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALrSURBVDjLbZJZSFRhGIYNRyK6iC7aLiK8qG4MifZuylxaVOymjZQKDYbEJE1nskITEpeCFAy98KIJl8LUyn0Hzd3EbVKcxlnOuMyZcUads4xzznn7Z4JJzQMv3+E/3/t87/n4fQD4rBdjqIlmNOV1zHSJYXk0n7MPZvK27lSrtSNhdKlLkbG53/vC6qoPsNovDTzVAJelF8LqL4icHhJvgGCfAj9bD2tLPBaqb2ot7YqADQBG/22nY0Y1sEZ3QXQaiHTEPAmRHYHg6CfqJWdqSGs0VgbegVIFWxfblfu8AIe6KIc31pIGE0R+hlQKkmAHJKdHkmAjsDG4lmsB0Qrz93hQn27XewHLw9mUyzZGemfIpFlILgsxLXmMHrlo8k1HAI1EFeBNg9AUnOW8gKUfz50iOwuB6YPADpP4ahJ7HMLKCDEMkB10w7XSDN78HpwpCaLDgKmc45IXYGlPNDoX+8n0CXDGF2RCFmxf78NWJ4etNhaWsghwVCYYzR2s0bngDIOYzjvxL4GlU5lt68sjcS3g9AqYiwPB6lOInoLRyklNxlzWDqxOhkGSNDB9ToS2OKLDC7D3ZMgW6+RTqxOlZIEa0B/Oesws9QiMIQasLgkL+XshMp1Y/lkJdcZRnqpKPLzhHtBtysD5ymh6dbwM9qqHfwFkstvM6p5gOuM0eu4eQuslGVqubrc0hfoqNwDcMjelnNSWP5ifKwkD1x4Oce4yRFMQ9PnnMJp8BlzdW0jqRjAVSRiMPyY0B8sSfDZfzY7y1+GFr2LXPhamoSj3PN6kn0LNtV1giRkFkYBiN5DlDzr3IppCfLX/Adx6qZAbVKVlUKkqUFRcQmL7QRquwvrHlr7f/TvSlgDF43s9La2tMJtpDA0Noz5qDxwlsQAx8ak+WCLSy31B9kBtCWgpz465cf0KExoaIgUFXZCyowJc/XFHxDmFP8zP/PA7bhvaImVCY6hv2paArdR966CSTJx1xybV6Da7z/8A2VoHSyUsj6sAAAAASUVORK5CYII=",
        title: "Scott",
        price: 136898,
        location: "PO Box 17551",
        specs: "5th generation",
        parking: true,
        garden: true,
        security: false,
        electricity: false,
        date: "3/7/2025",
        link: "http://nature.com/in/lacus/curabitur/at.xml?at=duis&turpis=mattis&donec=egestas&posuere=metus&metus=aenean&vitae=fermentum&ipsum=donec&aliquam=ut&non=mauris&mauris=eget&morbi=massa&non=tempor&lectus=convallis&aliquam=nulla&sit=neque&amet=libero&diam=convallis&in=eget&magna=eleifend&bibendum=luctus&imperdiet=ultricies&nullam=eu&orci=nibh&pede=quisque&venenatis=id&non=justo&sodales=sit&sed=amet&tincidunt=sapien&eu=dignissim&felis=vestibulum&fusce=vestibulum&posuere=ante&felis=ipsum&sed=primis&lacus=in&morbi=faucibus&sem=orci&mauris=luctus&laoreet=et&ut=ultrices&rhoncus=posuere&aliquet=cubilia&pulvinar=curae",
        id: "d8c:a8a2:a917:aa90:3158:c53e:bdc2:3657/49",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMGSURBVBgZpcFNaJt1HMDx7/MkbdMkzZK0SZxLmlZc07pN+3KoVcEdehR0ysAd9OZBvCmIIIhMPMjQswheFF+QIVitJytTRi0r2crqbE1dbddtVdq0WdbmyfPy//1MQRS8+vlYqsr/EX767elkvif+QyLankctUMGoYnwf1/XxfR+v6eK6LoHjYpoOntOktrV7e31pdTJczHYtThwr5PtzaQ6IKgeMKCKKUcUYwYhijMGI4hvD5YVf0hfc+lL4SHcsn4mGqKz/QWAM5cU1Hh4bZP5KheHjvQS+cOXnNYaG+rh4cZFCXxZjhIH8ITL3HE6FLQtElbaQxc6e0AgsGqaNnYbP93MrGCOI2nh04lrtVLfrFPMpAhEsy8J68+NZtQMHWxTLDjExWmLXa8eIYEQRgcAIgQiJcIOZmXncvSqB57N1q06oszR5PW7vjUc7aGRzmVgmk7V+W/mVlcoKGxs32LixTnTvJ06Ep3DjIxCJyd3a9tXqnfrmcnnuVUtVOfDSe998Ov5g/5nB+4ocikcpZW0OSOBw69IbxLLjLK5uMl8boTy/OP3ZuRefoMWm5fRbX/V2J+OncpluPAPxDv5RW5umMz1M4vAIqf1ZCgmHtnjPI/zNPvnK55azUzs/2J+LYIXBsklELA54d29SrUzR1ZPE1KcoPPQceWeGviPx1Nijr71Oi33h3Wd1cKh/LJVMsVnzMSJ0tlmgytbSF6TvfxKal7n00SfEkw6xWplirEZXOnmaljAtTU/sze0a1zf3abo9zMxdIx0s81TfDpn+DKb+O6hg9ubpP/ky1W/fJ9peaqfFpiXwfXwjeEHA8upN7uw3OabfkewdRhpXUXEYe6aEeLeJRCocPTHJY4WNo7TYtDQ9D8fxKPR0UMxEmEgsUBoYJdq1jQZVsEKUv6wAgjQrZAaKjCZXQj+ePf6Apao8fuadpdy9ucG2SAwxAS/kPmTi+Q8I2WtosAso/7IJdZb489oCla/PnrdUlf+aPTe2rUaiKoqKoCKoCCqKiqCiIIKqlv8CsLWQKDaepcQAAAAASUVORK5CYII=",
        title: "Hansons",
        price: 833449,
        location: "PO Box 60839",
        specs: "next generation",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "8/2/2024",
        link: "http://hexun.com/sed/accumsan/felis/ut/at/dolor.png?justo=semper&in=interdum&blandit=mauris&ultrices=ullamcorper&enim=purus&lorem=sit&ipsum=amet&dolor=nulla&sit=quisque&amet=arcu&consectetuer=libero&adipiscing=rutrum&elit=ac&proin=lobortis&interdum=vel",
        id: "f650:f930:8386:c968:4e42:d789:a06f:464/59",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIuSURBVDjLjZNPiFJRFManVo24jYISClqli3KGp0VY7mSCBqKoIHIIahFtStwUCPVGIiloRJmkqQERiqBFIZGtcgrHrCGaFo+hCQlCU9/T558n/v+699Z7PBmjDnzcxbnnd8/53jtjAMaoSOwkmiDi/qFdRJu1Oh1gotVqyd1ut9/r9TBKJI9QKDSnh+gBXKfT6cfjcbhcLvj9flQqFVSrVXYWCgUGyefzCIfDGkQt3kQBklTGvv022A84yWlFJpNBvV6HLMsoFosM0Gw20Wg0EIlEfkP0AFEUEb53EYnnbpw5MYV0Os0KarUaSqXShpGYJ3pAWfyJ3IcjKH5y4NIpK5aX37O5FUVho9AHaCe5XG40IJlcwv1gAMLnFSw8fASfzwfiiwahnVA/JEnaCOA47mw0GkWvDxbZbBZmsxk8z2sQOg71hIKGAB6PZ9xms60KggA16AWv1wuDwcBgFNJutxmEaghwbPr4Ubd7hhUOBgMNkkgkYDQakUqlQP4PBqCi3QwBzp+bPulwHEaHXKIJNW4H7mDLuAHr699YB+ooQ4DCu8u7f7yaeum0b8ObpbRW/H31KSatFph2bCfGiRpAlQZYix16lnuyF8Gre/BgYRFKkzjekJGcd+L66a14ccuM8pebbAS9NMDHxzMX1hYt+ZV5S+3aFTcCd+cwO8sjduMg3gat+BqzQ3jNj9qNvubBn085SQxSaOJvy6QvJnfrbHt1ABOF/Mc6q6Krb/oFGtGkE2IcdecAAAAASUVORK5CYII=",
        title: "Pankratz",
        price: 224962,
        location: "Apt 135",
        specs: "Integrated",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "10/4/2024",
        link: "http://wikimedia.org/lacus.jsp?velit=erat&nec=nulla&nisi=tempus&vulputate=vivamus&nonummy=in&maecenas=felis&tincidunt=eu&lacus=sapien&at=cursus&velit=vestibulum&vivamus=proin&vel=eu&nulla=mi&eget=nulla&eros=ac&elementum=enim&pellentesque=in&quisque=tempor&porta=turpis&volutpat=nec&erat=euismod&quisque=scelerisque&erat=quam&eros=turpis&viverra=adipiscing&eget=lorem&congue=vitae&eget=mattis&semper=nibh&rutrum=ligula&nulla=nec&nunc=sem&purus=duis&phasellus=aliquam&in=convallis&felis=nunc&donec=proin&semper=at",
        id: "f465:9ae2:8b90:db51:66b2:d608:ad20:16fd/40",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI2SURBVDjLjZPda5JhGMZX/0AHnRQldFwjCs0maplQE8mJ5Wxr6WiWa7XaAoVFrSTbWFpslQ6NDjroAzJYnZQSHQQj6DBaBx7awcQv/P52XT3303pn5GgvXAcvz3P97vu+eO4OAB0k9u1kEjNJ/6NdTJsFXwtAXK1Ws41GY6XZbKKd2Dm8Xu+DVkgrQErmYrGIUqkkKJfLIZPJIB6Pc0gsFoPP5xMg3OxwerZaRx0122UHvn6PYHB4DEO2S6hUKigUCshms0gkEhxQLpdBRQKBwG8IM25x3vPPumafQHP8BBY/f0G3zojr03N4NO/nHeTzeSSTyX9G4plM3vWJTBZbYWxiCvIjWkzO+KDSmmB3PYSqW49o9IcwSiqV4p0sLy+vASSyQ1M64wDmnr6BwTyC8/Zp9PRZMeN/Ba3hNG677vDwCEKdUB7pdHoNwKpn+s6OQKM3QaPVwe32QKZQQaE+BnGXErv3dIKFyyE0P2VCIAHAMqguhBdx//FLTNxw4tvSEiznRvFs4QM8/hfQG07yy/V6HbVajUNIAmDwwlUE332Cbfwa+s1DeB8KwWy7gudvP+Ki/Sb27hPzy9QFAUjUjQAwDlh5dcvwOOSqowgGX6On9wxuuefBxsO27Tu4mTogkfkvQJdSHVGoNZHO/Qeivaf6EQqHIZMroTyshkR6EHKFQjC3SgCsvsJN9NPu+VL1dloP8HO9PWijFQGwCpGwgEp0sBEzu1vg29sCEBFkA+v8R7T6ol/92Z1dPFeoPQAAAABJRU5ErkJggg==",
        title: "Hanson",
        price: 827480,
        location: "7th Floor",
        specs: "flexibility",
        parking: false,
        garden: true,
        security: true,
        electricity: false,
        date: "8/22/2024",
        link: "https://over-blog.com/consequat/nulla/nisl/nunc/nisl.xml?felis=nisl&ut=venenatis&at=lacinia&dolor=aenean&quis=sit&odio=amet&consequat=justo&varius=morbi&integer=ut&ac=odio&leo=cras&pellentesque=mi&ultrices=pede&mattis=malesuada&odio=in&donec=imperdiet&vitae=et&nisi=commodo&nam=vulputate&ultrices=justo&libero=in&non=blandit&mattis=ultrices&pulvinar=enim&nulla=lorem&pede=ipsum&ullamcorper=dolor&augue=sit&a=amet&suscipit=consectetuer&nulla=adipiscing&elit=elit&ac=proin&nulla=interdum&sed=mauris&vel=non&enim=ligula&sit=pellentesque&amet=ultrices&nunc=phasellus&viverra=id&dapibus=sapien&nulla=in&suscipit=sapien&ligula=iaculis&in=congue&lacus=vivamus&curabitur=metus",
        id: "c47f:e7a1:a15e:4320:364f:6849:6332:4f0/56",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE3SURBVCjPhZFfK4NxGIZ/R458Dz7B7wv4Go5WpJW8819mSw3bos202DsTNpT3FTbCRs0YkYPFasvKJhw5kpVEu5y8W0uZ7sPnup+e+34EorH+HIRZQsXfLtKkOSPJCXEOiLGNxgarpPniGW9WnPPN5y+9E3p5I4+n6DaLFHmeuOSRFEUSFNgjj04WDVcbQiCOuWBfnrIlE0RkjKDU8ck1VBytCIE45JYkD8QpECOHTpYIGVzYmo0UO5Q5IiyjqFLDKyNMyUVs1GJq1mvuiZJjkzvCZAhyw3ClrocVQiwwhwc3E4xjZ5f+SoOihpr66Hk1gOWWYGAeHzM4cWBnlEF6QZjLBqBaEbPKdMmpVP0WpbtkVjo/DMBv9aJzxTo2RhjAQoA0fkyFuhsmGWestqFL6cDEP9+s6gcdbFPqiEGjeAAAAABJRU5ErkJggg==",
        title: "Autumn Leaf",
        price: 814279,
        location: "PO Box 94482",
        specs: "Centralized",
        parking: false,
        garden: true,
        security: false,
        electricity: true,
        date: "3/25/2025",
        link: "http://hatena.ne.jp/ultrices.xml?amet=nunc&erat=vestibulum&nulla=ante&tempus=ipsum&vivamus=primis&in=in&felis=faucibus&eu=orci&sapien=luctus&cursus=et&vestibulum=ultrices&proin=posuere&eu=cubilia&mi=curae&nulla=mauris&ac=viverra&enim=diam&in=vitae&tempor=quam&turpis=suspendisse&nec=potenti&euismod=nullam&scelerisque=porttitor&quam=lacus&turpis=at&adipiscing=turpis&lorem=donec&vitae=posuere&mattis=metus&nibh=vitae&ligula=ipsum&nec=aliquam&sem=non&duis=mauris&aliquam=morbi&convallis=non&nunc=lectus&proin=aliquam&at=sit&turpis=amet&a=diam&pede=in&posuere=magna&nonummy=bibendum&integer=imperdiet&non=nullam&velit=orci&donec=pede&diam=venenatis&neque=non&vestibulum=sodales&eget=sed&vulputate=tincidunt&ut=eu&ultrices=felis&vel=fusce&augue=posuere&vestibulum=felis&ante=sed&ipsum=lacus&primis=morbi&in=sem&faucibus=mauris&orci=laoreet&luctus=ut&et=rhoncus&ultrices=aliquet&posuere=pulvinar&cubilia=sed&curae=nisl&donec=nunc&pharetra=rhoncus&magna=dui&vestibulum=vel&aliquet=sem&ultrices=sed&erat=sagittis&tortor=nam&sollicitudin=congue&mi=risus&sit=semper&amet=porta&lobortis=volutpat&sapien=quam&sapien=pede&non=lobortis&mi=ligula&integer=sit&ac=amet",
        id: "6308:c776:f93f:1310:2c2d:cf40:10bf:fbea/36",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHvSURBVDjLjZPfSxRRFMf3T9g/wRdRkfKmRbkq3gfpYSvUHiIVZHqRiH7MbogW2GD1KOxrIVuUoOiKI+2isMleJXPZ3Np2NegstHNpGJg7K8yfcLquUII7sz183+7ne875nnMDiBjwEmz0ECkKqRCFZHew3pv64GbvkJkbN+zSExTFp1LTaBciWE72xUC/HPQ1kBUVcTiDzo9ZCUWRbw8y8/OIIb5Po1Oawd/bwwVPAwk32cUpdA6e4a/0wFv4cOVvNVi7NGRl77iQ6NK8DZIh1TnQ0MyOGnVHW+kkdTOAVE+wkgnrVn7CPfo5h8ct88wNxreuM/7xmlSYVTYGdM8Qy5t9Mbs4idXDF1IvURQmUXx7LBVFkY+g2FcRlojmuwWZLrGPAQlD4iKVs1JY7qSwdEGKUK9VB06FROyvkVpVOauET0BY7CB+t3IKVrFa0rBa1Goti/2HKHIPEBbOq40NEl0KT4eZtTvmHpWeo/VpxOWpq6yy3q/7wWfXuNihiC9RtHZuu/D+3JnWYb5VhfkW4nuJ5tawUc1PoZW55ZYXSAzetFGItyl8jTJn7x7aO+MIr5ubvE/5XTsx04OGyN5HJydD3Z1AsXcXnewjtNI3XQkrDT9TzSjeqlSWQzpfpYyv9rNyvD0Gr/5Vbmjwv/oDiJrRGbut70sAAAAASUVORK5CYII=",
        title: "Reindahl",
        price: 530575,
        location: "10th Floor",
        specs: "hybrid",
        parking: true,
        garden: false,
        security: false,
        electricity: true,
        date: "8/20/2024",
        link: "http://geocities.com/augue/quam/sollicitudin/vitae/consectetuer.xml?vitae=neque&quam=aenean&suspendisse=auctor&potenti=gravida&nullam=sem&porttitor=praesent&lacus=id&at=massa&turpis=id&donec=nisl&posuere=venenatis&metus=lacinia&vitae=aenean&ipsum=sit&aliquam=amet&non=justo&mauris=morbi&morbi=ut&non=odio&lectus=cras&aliquam=mi&sit=pede&amet=malesuada&diam=in&in=imperdiet&magna=et&bibendum=commodo&imperdiet=vulputate&nullam=justo&orci=in&pede=blandit&venenatis=ultrices&non=enim&sodales=lorem&sed=ipsum&tincidunt=dolor&eu=sit&felis=amet&fusce=consectetuer&posuere=adipiscing&felis=elit&sed=proin&lacus=interdum&morbi=mauris&sem=non&mauris=ligula&laoreet=pellentesque&ut=ultrices&rhoncus=phasellus&aliquet=id&pulvinar=sapien&sed=in&nisl=sapien&nunc=iaculis&rhoncus=congue&dui=vivamus&vel=metus&sem=arcu&sed=adipiscing&sagittis=molestie&nam=hendrerit&congue=at&risus=vulputate&semper=vitae&porta=nisl&volutpat=aenean&quam=lectus&pede=pellentesque&lobortis=eget&ligula=nunc&sit=donec&amet=quis&eleifend=orci&pede=eget&libero=orci&quis=vehicula&orci=condimentum&nullam=curabitur&molestie=in&nibh=libero",
        id: "bdf0:8eab:55a5:cc89:8b61:3a08:ad26:1870/105",
    },
    {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJfSURBVDjLpZNrSFNhGMelD34op67Lp4I+RKBREkUNIR2po7LOztlxbY1amstyXWw2m06b6Ra1llpqBJrlJdNFVyqxixZmIQ5npVE20DCkYqaDDBVy77+zDQbCmEUffvC8L/x/z/Pw8oYACPkfAl5mKmWl+cJFMMTzoNsUBnXsQqhk4qt/JVCrUosMVBQs2yJg5igWhUMbH4a0uKVQ7VWUzSnQswJc4II6LqT1Eg6NkI99GyPArF1M5hRoBZGkpTIPI60WdFYexO4NfKTGLoEidhl2rotEmXbXgqCCqj3LXa6P7Rjrvo7vr2thr8/B4P1ijPa3ojFjxURf3aHQoIJqxWrbuK0Jzp5bmHzbzGH11uP2ZlSnx/QEXcGaxM5/tnlrx5NMAaZ7ajD1/p6XyTc38FwjgFWY/KJRKOUFFJQnpfE7RFSNk6Ux5fiEvmPJaMnd7sVT/7J14ytDozMx+WJ9nCJylsCcIp03oNHWfpMwgOMD0PUSaKoFrlSAVJwDMRfCfe0ySPcrfGEY8iCBKq1LpEL9grYtjJGky4BHd3xwQVRagBIjcDofKMgGjh8AuVQCd4kJP9Nk5K6IPusX9J6MmnE+zANOnQAsRT7OFPjO+iwgOwNQK+FWSoAsFcYeF6IrJ3raL3hniCbjT40gSm6FqnIQLkg8XXWHQTT7QXRH4OYm8HT/IWfhajPBlruK+AX9DUf1dv3K3zOcYDSFBs4XB2SEZuCgGPQWxkxzGdOsV/hsVfPa5dI1TSLl8AArJ0M0iyGxBIOUBI4dLPrFMnI7QTHRyqasH76p5gX9jf/CH9NZtVjmGMuRAAAAAElFTkSuQmCC",
        title: "Arizona",
        price: 833209,
        location: "Apt 159",
        specs: "Customizable",
        parking: true,
        garden: false,
        security: false,
        electricity: true,
        date: "10/26/2024",
        link: "http://wisc.edu/maecenas/rhoncus/aliquam/lacus/morbi/quis.js?ipsum=consectetuer&dolor=adipiscing&sit=elit&amet=proin&consectetuer=interdum&adipiscing=mauris&elit=non&proin=ligula&risus=pellentesque&praesent=ultrices&lectus=phasellus&vestibulum=id&quam=sapien&sapien=in&varius=sapien&ut=iaculis&blandit=congue&non=vivamus&interdum=metus&in=arcu&ante=adipiscing&vestibulum=molestie&ante=hendrerit&ipsum=at&primis=vulputate&in=vitae&faucibus=nisl&orci=aenean&luctus=lectus&et=pellentesque&ultrices=eget&posuere=nunc&cubilia=donec&curae=quis",
        id: "2a4f:3c00:5af5:d207:ca4f:f443:112c:aae7/84",
    },
];

export default function HomeHouseCards({ data }: props) {
    const { image, title, specs } = data;
    const navigate = useNavigate();

    return (
        <div className="p-2 border rounded-xl min-w-52 mx-2">
            <div className="relative">
                <img
                    className="rounded-lg h-36 w-full"
                    src={image || listingHouse1}
                />
                <p className="text-xs py-px rounded-full w-fit px-4 bg-light-100 absolute top-1 right-1">
                    2 hours ago
                </p>
            </div>
            <div className="p-1.5 mt-1.5 flex flex-col gap-2">
                <p className="font-semibold text-sm">
                    {title || "Ikoyi, Leki"}⚡
                </p>
                <p className="font-semibold">{specs || "2 Bedroom bungalow"}</p>
                <div className="flex flex-row gap-3 items-center">
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                </div>
                <button
                    onClick={() =>
                        navigate(
                            "/tenant/property/single-rent-property-details"
                        )
                    }
                    className="btn-primary text-sm"
                >
                    Inspect Property
                </button>
            </div>
        </div>
    );
}
