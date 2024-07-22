import { createIcon } from '../create-icon';
import { IconBase } from '../types';

export const PolkadotJsIcon = (props: IconBase) => {
  return createIcon({
    ...props,
    size: props.size ?? 'lg', // Override the default size to `lg` (24px)
    displayName: 'PolkadotJsIcon',
    path: (
      <>
        <rect width={24} height={24} rx={12} fill="url(#prefix__pattern0)" />
        <defs>
          <pattern
            id="prefix__pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use
              xlinkHref="#prefix__image0_1052_5381"
              transform="scale(.00444)"
            />
          </pattern>
          <image
            id="prefix__image0_1052_5381"
            width={225}
            height={225}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA4aADAAQAAAABAAAA4QAAAAAYn8bHAAAoZUlEQVR4Ae2dC5gVxZXHj8NMBIRBkIHhKW9QEQRxICCKBEiMJEGBT5TFCGHZqLvGSILf7ppVs2yyIcFN2KiJn4qKoMQoJJqgQhSCsIKAgCigvN8wCDI8dXDcX92ee7l37qurb3ff6jv3fHxM3+7qepz696k6p06dOu/LL7+UPKXlQOVJOVMhFfvk5BGp2Cunj6ifZ47K8V1yap9UHlMZnD0ileUCO88TKSqRwibqZlEjqd9SGraVuo2lbrE0KJULSuSCJlLcUv0sukClyVNKDpyXx2gC/hzfr+C4/305tFEOLJMTH8npcqkUKQilrRP6HyBaZP0M/0rw94vwPUsaWD+rgK9IvRJp0EVKB0izS6TF5XJhW4XgPMVyII/RED9OlsvetbJ/rex4Qw4sks9FLOTxP1hMi8JYnur9ArJg1wIu/39FpHSItBkkrcuk1RV5yMLMWoxRcLl1iexcKtuflxPlClg+INIOfqNR26BE2t8inYZJ27Jai9dahlGmlcjLjxfKlhfk8GYFykKPxaQdUKZOA2TPhgRt067Sbrh0HS4Xf1XqnJ/6pVx6Wjsw+sVnsvXvsuEF+fgpNapa0AxiN1pgpf6dJ0j3MdLxmtoA1tzGaJV89DdZN0s+nqUAab7ItP/ZWMLVAusV46TDIPuvBi5ljmJ033pZO1ven6akZi5BMx5fFlhpY5+p0musNG4XnyTod3IOo+v/KMvul082K8sOPVd7iGkA1rGWA6TPPdJjVC61O1cwipK+ZpYsn6wEZy1SJ+KgGJkD9J8uvcflhikg+Bg9ukPe/h95f0aANaE4pLlww9KuLr9brv5h0CcAQcboka3yt4dk0ywlONEe8hTPAcTqZyLdxsnXHpAmHeOfB+JOMDFqoXPzLLUqk0dnWqCBVFbOugYVqUHDKCvpr92Xl51pYZkgQUSmfuMX0rBFggSm3goORrHDv/lzWfFQXnZmhCVLpvZ9QAb/a1Ds/wHB6HtzZOFY5XtRq8xJGYEx5ctoVPjKDJ0tvW5Nmc6Ih8ZjFO+4l26Uo5trtUXJI6igTjXuKiPnKc9Ag8lsjC58MD+4ewueyNA/9EFvC8ogd1MxumOZvHS18vfJD+4Z9K7dVy0+j3xb2g2w+4qP6SzPch8LTF9UlbzyA3nuapUwD9D07HIjhcVneA7nhR0CZpFhchRfkD8OURsz8ujMCk4QqGxfGbVIWvbISvkJCzVJji59WJ7qqbat5QGasK98uAnn4T+9QF8YQ2bIUdzjnxksh1bmlXdTgIHK36xMvvumCTtXDcDozhUyt5/qm/yqpikIDdUDlR+6+R25uG/oKmv/ZXusX/6oPNtPoTMP0KxhIEnBVqfQO/RRVimLcrRK5oyUHfPz43tWAWCj8NMiHUfKLX8Ixxew8YqrSbKEUSagT1wpFZvz6pGrvelZZuj7xV1l4uqsTE+zgVGWN5++VLEzP757Bir3M7amp7d/6P/Cqe/z0W2L5YlL8xNQ9zHkdY7W9JS+YwnQX/IXo7gvzb4uPwH1t4tdLY0tD7OuFvrRR/JxrF/1tCwYL/V9bJw/RVmDYKQsHAhxe4um3JvSnBK5fqb0uT26ld5d+4VR7Bdv3iX1vGuILzkDRyAIcWEta/PJFROJqY0U1pfCelJYVwqL5GylVJ6QLyrl7Ck5tkVOrZOTIeAyaIFXC8FBBy7K/uBHpP+dPvDdF4yysLZkclABauGSrevsnWrYVS7+jjTtIs27S3FzadzWtjmmSo4flCO75OAGOfyR7HpdKtapPUYEAQCyAcUrML12ugy812uYeo/RgAIUaGJwQVi2GSKXjJF2/RUiXQxpi/Xt6C7Z8pZsmiN7lymYslYeOLD6AlOPMbrySXljYpAkqAVN4NJ5klw2yqegX+B1+3IVl2rbrOAF/wGmw56Qsu95J029xCja31/GBgagSE0G37ZDpOwe6TIkO/vR2Ff4wSvy3u9l1yI1tQiK/xcwvcHDrVGeYZS4S38aHQwtHh8fTCq9pspVE0zZ1MsW7TXPyYopar4RiNBAaPrfedGjOFPeYBRXJnwRzDczgc66ItchA8bY1n68G9Pickasrn5Olk5UsUbMRyowvc0TJykPMEoApsfam85Tq9eHevXpx8EtsxtM69+aqLIwfPSHq3dsdz28lNsYZfo/o0FmHeLx25ZWNBCjyT0mys5krYexC38qa6YZHQID3mKauPuEmwYQrHOunn1TJb/rrSx/xtpQmN3jZvbtx4Ia9JAx6s//KLsXmauJAtPinvL9NS5+/65i9PlRsuslQ8cjlA+s5SPekC5Dk4mqwNxHH10w2lzjP6xui7/pH93ip3s+Jax2bjUVoIhPuPbDE7kAUHqeMM3/fEhajxDaZSAxad7+kove+y7JUfy1cIcxU5FnIn+9h9a7bILE5CUS1Pxx7gSVcAOjxPn+bTMTh3hrCj9+S3DDw6b/AHAYn3WpWp0yUAdg0EfeZ3y6pBtj/ayh1b486TnqYwoY1HyI3HMmlwEKOwknRhubDlDWftMIBQBsZEwZY/TN/5Ij5inyjO+csvXdhdlZ0sy4V/Qy4My7CW+r9tJqowjRDjZASGaU2Vi/d7XM7GOcHQRNovcU+eYvMuNMAN+2wgya5qRLd4xfJa2udMzQTDBaJQ/Xqfb5dVy+6y/CEYIUD33Q9YyTZxjyDT39qVSekrPhEbewUIrqS70LpWFzFy2FyesQfmKmJySD/r1MmR0O2hksrs27Qx1alUEGYb669xeADpwm1/7YvRwT5YSOePAD2f2u7Fshh/8un5afm45HeiE6+BzmjtIRUtpHWlwhpZe5vlQYU0U8juvUNW7LAzgBLTf+Pqaqtn84laNs75xznVmjPADtP1UG/7vttuskxL1j5//J1sWy8VEnB4kjRNhkwv9gF6c7r51Tl/xSlk4xrndufUs6DNJhenVaZxitkml1zDJ2oC5wXta3fuOABWleYc695lnZOKN6a4cr4wZgZVKASnHp3dL7tkzmakkr/9f7ZO004zx7JjsZ8R1hlPZzXKwrvZWUxzoP6O8O42T0szrvpE1bJetf9vzoUboMx+riEhn4a+kx0mUrxIu3Kcd+o7rpcie6rD5GCWNLfEpzlEe6WTkxrE0LOo0E7CB4c6yvXpuMA4BpkNubLp7oK0dWGjTiMR+bsE43AK8+Rh/rJsc3G9RsMMpCvFu74T5aKK8OkzNZ8ikGqfgyf/NVueQGjS8qRVI8+h5uYJAopbPYW3vHphRVjn8UUUTjHyW6g4DhGBpzlt34Lv9hnTsAZXvGnBvlD8OUcpMtp3er3JeGyzNDhfpkTny6Y94xyPUE5IAfzTAnOnIU3XZ6XYMAitQZ5FIYAmt7IBq3IZ8f8obWuRULBDV/2ZSsfXjxXxqtm3zG/uRbR45yFKIVpSO+VP/v0M7SAS7EyeDDQ3xa+1cNASjMpCZYVV8brwQq43WGhMGYwOFwzBACRUt+Zb8utuUoQ89vWhqkKqHLZ+5Tg1v7rDKjjzEBWOD1Fm09oyYC6L7/bWmQKGWS9kO7LlG25SinHTMUGkK0cNjsTJ2+8Hllb+AZs48xsUQ7hhSUuUyIg5ZxomX+YAiBpb9OtlkXexjlvPhNswyaq5WWZXoYK9stcMpGRzFnfE/RY1j65g7TVTVq5sfxtU16mjLiw3YQBa5skD2Mvn6fQcMEo/zIuTaaljzJqqcDE58i0gimp0yaMzw26abn1ZKBIYSAeO1HdupiA6OAnY1KhsgbAHrFlIzcMtSGtWCGQUWaLp4sfGCOCYfonneb4g0NorbNF5aE0pENjCJEzZmJokMM/Y90jUr+HFeYoET4SdgIpCkfGJ+ZY/rGz0wZ7mkCuFr8QNqmpMMoQnSLSUKU2A2Ol5RoywvXGboxMG1HRRIA0z+PtiN+Im/EXMC9AdMMEqVb5wvWlZSUDqNLDPOd6X9XyuYkf4gddGYng2bVyWua/gmD/qyeghurMyL4sjm2Umali9IMjCkxChc2Pm7QTPSqqfYXJ2p239wxpgiPmjVz9BvP9ueHO3qT4NEXyFUPmMINZqUfz0q98JsSo2uMsTfRG3z6fSc57BX2oTM9N8dLzWEzol6jazkC2LGaz3CEb7whRFve+X2KuqTE6NLJpvSrpc4726nNEkuwYkmn6K7oR4ySnDJgz8QY/Z66hpOXTTJlxEd2vPtQzRpG/U6O0UyUx6gC3Lnko+9zu8OsXhxtkF3CYRuSvIZe/PKtSZ6lu933LoNspVQ2Od6SY3T5VFOEKKP8RV0dHgFIy/eFTkRI12WBfG6N+JqubtUtbdlDcdUQQpSCtySUBKNEaDlsTGQHBvp+aVS/JK2rkoWjDfKDSVLLjG4z4r8xVrBaOCC46ug9B0WleYWPDbyBukSUBKMsZnB0kDnU/TtO6rL016b0gZPa67yz/BGd1OG0zrgaftvlv+AtyRJaEoyas6WOgb7dCCd2e0TL/03OEYNoajgwUNJSB26mGKHgrSG2UloB6hJRIoziBmZIvakxA333sYlqnu4epx3wbi0hWvreC07aCm/N4RKoY7E6jhJhlMOsALUhRL07XuukLksn1goharGGWSntdUDtBxgkj0Dd6qfiGxGHUYYM7P7MYQ2hpl2d+DLzOeIHXauI9iYSQml4gO/zhSVp0vj2GNSBvbhJSxxGtyz2rUrpC2IY6jQmfbL4FCt+m7M20fjGWnewlSYSQsmSn7vf7U6DhnuqFYfAOIxumGvWQH/xgHPctHnFh0g8dnOGApvVzjBZEiGUPlc4bI76wXAPAmMpFqPowkRfMap3W10RW2EbvzYusJEoR5PECaH07YTDVelT+ZQC7KmDfWPMtrEY3b3KoE8KrjQocTIZ3fxng4YCn/o2VAxCaNOftQtk7Z6AU+YQQh0cRlEsRj8mOHfUw+xeUtcW33BSBaN0PicNcPoOfffR405ebjbQINlEK8BhFMVidMsLBkkgIgWU6g/0rKe5PnLxtZgzY4vqvASXON+kc2tP8FaLfgZF92A0AIdRxI0w4cN2eLNBWymABYYnXdr7ntOQ1nElWZMi9vte1EMqj0vFdrWmzJJdFM/i3sn2DWQOA2Xjdnr1aNxefYTmtAsc4l8fdsWMqtd2w/yDEIcXddDjNan3rHCB19i8wOKwmdJzdMwyLIzD79tyqzVnUhTNI2q1513tc+SbdnF/8Imule41rdi6JNKKqLF+60IXele3NqnTc+aBLpWv1n2jZnrEZ5dJ6oyBPrfHAJR0fNkEnP/BIRXx1JwlxOgGsIfk04+ib9i6rldsK5lviZCcoDFMURjdPc8ghcmqH6sgelQlRzMbDUAeMcvV6QJRnKlRB5DKucKNjIn5EV09JNDhZdE3bF03bmvQfJQa0wrQGKZwTzCKnXC6zzCcl8t/2f2oS5WnhWMqHRNzMpBnK6h+gYxbaKgoVf2oqzYWGLcsRyvAZIjCGN271nHPevVifX2F6eiuc8fQOKjW5yLfetLue0jTflNNhCn4PPmJ3VZE0tU3yURq1SqMyTBG95gUNZ0qItLqt4kw0O7F6YoUQ3T6TBqV6B3x0WusQbsro5t3bH/0L1vX9UKqva2kviRSyt9Kq6QwRncsyEgCeVHtrzTSzvXLDBQZXu04Xq9ETDwOJiR6ZeinpkuZ8+hSkWFqE8ofmAxRGKMHMlM1dDliJ30hUWM06fMMZqNI7vbXaJaHBXeIieZ9B9+qA4mgzSydF5CjYDJEIYyyMqE7ydYpLhhp4QAHJerS+YaJH936R9I7kAiRdz26oEdCa2YhjB7bm9E0zqMqntUXil/RF72RyvMqJhhdKl9qnMFOtwlWegfcdlaQ/bfAJsistgLuM2abcnQDvmT09YsoimNndb9UHFWPG2awc8wwP7lts5IM9yCzulcOrjNOYaJqRKrXpaK6Dict+K+0GahbmpRvdVicdkk6LzBE1m+i80Io7al92q94/QJqE8isxugn5hlH+YZOOljTu9Ah35Cjbfpqv7tvjVlRCCINcLCGfHq7iZOWEDIZ86ukwjDjqMXr0/pytFHrSDfpXYBRBw7/2980cfyhS53IUX1u67FYPzVyCmRKVYGypZ3Rf9+HN5RrHOOWDtUpcuhbyN5IB+Gh979mouxpWKIfpbXKrPhkkT4HmZWnC9QyvSYSIjl4e8F05PhBzSIK5CJ9gyVCtN0tmgUxFSmXY+bJHtpykf4uxQzXkLV5Z/sFkHmivECp9yEDlO33fEzoQGsu6a3twsMKU2v9ySiryQxGppHavNBHu1KnPjEUAyHzU4Gc/lS7Sf68QP0O66tNra/SXvjhY23VS7tNpnk4WA1Ajra4QrsthzZrv+LbC6c/LZDjB0yUB7AAKXV0uzYrWvfSnroQPcGBw7+BHg4wi++tdW9tpsFnA8cECwPHDyBHj2g3yZ8XmI/uXa5dVJOOeq6QCJ4mZU6UjHLzPBxgFqtl2o7hOBQvNtFAYfX96SMF8vlJQ+vHl+3ApZyGXXK3xnDPBK7Dt7W/BAZHdmCaRkysu03Rr1SVfLLIUDmKnPr8JHq9vq+hPhscvlFRnvpUlMTZdh2u4XqMHG1dljifFHcPfGCikkFbul2fotaJH2E80feMSJyVF3dP7C+Qim1e5OxOnqhN+zdoZ9XxGo3Ng0zgWnTXLmLnUo0itHN3+gJb1Tpco/3ynjUmfm+RZlRsw4ZfYaicp5YM9zv1d5DVOV9a2w5PjJOygwncnteNYxoDPZMcB3Db8oaJ35uFUQBQWQFGj0Uga9wFgmHTo05qhY2QiWZaYnBsOy5tqpoJcHciSIFpxPy47/edVGrjDOO+t+hmnP3MWPN9uJqfntsfGL5l42/dxjYSicJxq362UkYn2rfBxE51djwQR5Cx09Bk+vJMgZw11fZkMQ5pT8gKXTp5yNYbyJ5WV9pKGZ1o72rjMIpvw6Dp0XW0e73pdUNdtyINOIvtqdK8RedI/bhguP8gJkJV9MOk17sX2TKoMYo07ZA0k2QPdiy0lXmy1724TxDMS25wkvGHzxjXlhrNqGS93s68rcZrfv5EjhKUORwOwFbJJLa5hRAXoXDgK1s5W4n2zzdLjioh6mjWzm6hA0a6ZcZ2RoHpnxHVBaarno6tdspfK+ydZ44i3HF8yowSPaRf9TcGJ8rIvXsI0R6jnGS38a+mD/ShVhVIkXkBKmrwm+F+6RS7YTVRApbfb8uYoqz3V9UoKv1P06z3fDDfPhcaKX39o1O8c5ctRkW/4v91UUmBFOrvffG/olgxZ7ZPv+ZECNWnO9mNy4D13sFmZSInItcNIYaCruOknb7DKPXfsczo5aUIhwubGG97itSVefOjLVOcIC0cz/dYS41V0CKRZvohpXYaFtBlxGMRDuldLP+VnvONXu5upi6UIv2QNW5WQCcvBv1XR8uSEun7c7X96MK2wob6MxVCdN+Vv1TTf8StTWKgLx2ivypTJftXOtyOYrNi9pMxyo981ckWF4pgRrR1vikNSd3kokZgtFh5CZkzfqWu8fk4wpTLWxOr3Y6Qhdg4GQyAr32AUgRSuc2g1EUleIr1Hk8cE4hR/rJJDu1N1H/ZjGAIUZBZVFwoxR3koAlc16kDiOSfRZGL8A1bf5XCpO/uZMhmZSpf3FVudDrKM2tfN0Pvk7bFU28SFXcokAYtvMnb7FyduTvtWmqEHGUQuG2p/kQl3COL/zsQJqfq6jZoQQDfC0w344d56+ZfJgZO3J1eyf6kCIv9+A+dLD1Y7GMmunbGuVHITZ56kBdf41cuKJB6QbA9udt8xsr2E7SzZPkKn+vsEs7I310lzS5xXotXvh+wI9PrYXtqWKqxs8I5b0x6k6+zdX/tCh3Mtu89AL35DSdOMJGmYp7DkyEo+jHVRpo0LC0UB7GBIm0O6IVyd9Lf4Ls7q9Z7LE1j35IOgzJgeZW8OiwwqlKknfUuLJRGrbQ3+0beD+gFtqpm3bTrvuON7ChMyBIE/4R10rKHdp2jX1j4U2Wnc2YGic7Hz2tU20atCtXZxsFZbHKBP3Q5xys6iO7EKKllgnWhrqKWzTAzocU78M+KrgA+ryseykL9o+vg4BpkNmC9vqie1HXwdmBfQSa1/bp27VGH/SfG984T5I4MtPhInef2CR5AqTzILKoHUAukuKwWqU3IUQfuTnvcOyo3gpsUF4hP/rHUedOTzu2gkfzn/ZOJ0QAi1Ut2QU+BTCkIDfNN9DfvJsvX/PtMcYi3o0tsVvZHHaZjLPF57wnnS53RrXtvjnzweMCmoZH6h5AZwmjplbXLjE+8HV3au8SPbgadDbvKP7ytxKeDGXN8o/atl1fHBnKUpy3MykBmtZrXMnQ8a7A0vvj+sHMHKdVmiJ2EMWnYrHxknYemb2rF5kw2dg6d6tCjPqa64R8sOjzXMxjOTeEqx/yFLSCzGqO1x/zEp9luWAwj7Pw4tMkr8xyTTtDZdoh8dYp0GWqnLrbTVMmzA20nNjJhyPBEzULCs3G72mJ+UnJUf3/I/vfddMKgDnwqmCqLS6TXD4RDR+G/6/TM16Visx/zE9drHsmQeWiIM+EBvnSAClLnj1oQqYT/F3yazS/TLnb/exlZ7y1Q8j+lg84WZdJ5lHQanNGqZuo2zLlRDiwKNkBhF5gMURijzNIIqJnzhOhyYAz/OHm0GQt/Ft+4tggsWkT03bol0rSnEAG9RU9p3l1aYkIJ6anhJO7/BaC75wcboDBFzcqut5gTxujFA+TdoC2U6XYvGGr/Ld2XBIUJZw7QBsE4MgGCwIwxhzPfOSDhwi5qHeSCZtKgmdRtpLavFJcK54hyUVCoH31Xu4IxLzw/SnbM91C9iynMyx/wOeyEHsaog/iGXtbQk7xBWNuB2jkTi50Xi3tKo05y8WBp2lmFNsFZzBXbkHZtUr7wzFA1xLOdJjcojMkwRnH4Zd2JzshhQk1pcbl2+zCm/oSP2uMBWrtasS9gZkKLD7qSFN0m0Bh2Qo9ifftJOb4iyhdY6mxFLYpL0Xw05Bp/kUeayfGAa/HRzEQmgMYwRXG/41CNzenh9wPzl2aX9PR7dugDd1Y+KTP7qMlxLtlkMBuDxjCFx3p+tx+Qy3JUTUb13Z3CbDLx7xefyZ/ulA+fCupSZwqeKjlabXgiVRRGGf45NpPd6zlJNNuBu5OxrGB8f6GPGvf8d2n1gSfgMDwZpbSosZ5fHcfn7HCPwahpFx/Y60cRb/6XGt+hKAnjR7n+lKEG+ph4hrEYvfTbOTvcE9GkpKM/TPawlJ0r5OHz5J37c1N8WoxjxAOHURT7JbYJzb6jHufIJc1u5Gh/iDntP7pDFvxQts1X6MwZC2hC9qL8gcMoipWjnBrD5gR6NMcIhanjiKC2idA3f71Pftte9oQAGtRm2Ks32OsyqYb5JVaOkk/3MbLpqZwyZNAoWh5EhQnZ+fb/yPshbwEOAq0NxGT0spoxqeMwyiFxuWRps/oVhal5tyB18bbFsuK3suUl5SeQ2yN7jV4BeyAwluIwag33W3JLlNLTDvaHxHLKj18Izg0vy3v/rYL2UOdaIjsjnE000PMwDqPcy7Hhnpa3GRnhg4kXhzbKlrdk/eNyeJ1ypqZPctLqmZb1iQZ6XkqEUTYtJLqdtghDE6AwOYju5G1jquToLtm9Sthu+tEMtREUaBJ9t3ZCM8JqUJdow0wSMPZ6QNY8lCNIRY626h3hQxYucEr6rEKOH5byjYLILF+jzovHJxWbCuxnBlbLoWl1CUK09wMJeycJRq8cp0KvJHmYMCOjbzrYH2KzPSyanzoiFfvk5BF10NnR7fLZUTlxSA6vVIdcnipXW+qs8OQg0lJG+ZnHZTx78ZwEdYkoCQzRMErL5EgADkFL1KjYe3XFyf6Q2Dxq/kK54QCuj+fJwUXVZ8JGIEhSC5QAEe4mYXDNDGv5b8a6lgOS6bXJWVj2Y3WIh/XpB5eDNL7zJDerv/Evsuyn6nQR9O68RHSLswz0fe5JlllyjPa4SRYkeys491GY2nzVneoSYPb1sXKsVlqF3OFgylySHycZuxYak0mB9J8eeDcoZjktM1aYmHS+eJvMHaYcF9Fvgj62xPSyAT8Qov2mpqhHCoyiZ40L/No9Np3mXVO0P/0jlssfaSPbZtU6i3p61riUgvnYVRNS5JUSo2xFvyTIm5xofMmAGg4KKXiR4BFhRzkA8kx5XvVJwBxXbtFH3SZEezTH55oSoyS/dopw2EpASU1GhzivOwD9XSeFzvzg7pyJ6d4EXdf9JHWidBjFCNVpZFBHfL5Rx+5OhH6Y2al2+XOkRooXT+kg0JUu3FU6jFKzr/+i2gToRS09zRN3Jwenf1tVmjMiqF+mpyx1N3MWOL72n2mztIFRRGnHYIpSFKZ032hiBhH7OFjnGCVuhtl3EaLgysZ5aDYwSksRpYGblcKCNo587xnlFwQ29rHZsIypHYgCVzbIHkYRpd2CZodSCtNAGxyIS7L013klKY4pbt9AgoAocGWD7GGUjL4RtFmpkqN9bXAgNglC9N3785amWKZ48IuZKIiyR7Yxyp78/lODtOyEwuTgwMUNf8qrSvaQk0EqFpbAUlSUh9R52cYo2Vz7o2qPntRZGvKUIxAchF9c/Zu8EPW8A/HFAUu2SQejbHUaOjsYyhMDfem1tpkQTshAj0NT3mIf5ocnf1GVQBFYsk06GCXTXrdK464BGA0ZTdrpY3TfhkwByrdB0XRD5B8/8xThAPwBP6BIh5L75iXLZeQ8efxS07c3qMmo/mF2uzI4tQLuowew9Nr5RhXruUFzqTwtx3bLnndl0zQ5U8u2ICcDDywCP5p03pdfYqTRJMJmvD/N6Hkbu4V+ot8uTjsgFoiDsZ5Nc5dOUOvOyZYM8IxeMDx4R3Nr4iJNcoaUy6fIN+2q85HcHGGUUwumO+jJSKEeXyDSmpTJxBWaxVTJw3WcRFtnWB/zlnQYlK64KpkzMkcOVEjX1KTPJ+sLjpqxHZPmXeNBgdz4ltpxaybBh5aDtKvGZmKkry4B0NvX2QAo+RbIrfOk87gg2e90uZEiPWgBM45IU2eKlNFhkFw2yVB2I0cduDsd+KBGMNZIW5NewPfrZ0vLHkkTxD8Y/aw6Mae2EaM8aOkwyFm7nWKU0m58TEUuMJBQmGKDA9qq4/a/681E+RLYyqipoqqafGueuUOQLU7pJwInoMUpZYBRxM7Nq0xkdz2OU2qhzZCtM/W0QFTUr03XLoUX2g1QRywD8VpCjDbgRHuQOsedTDCKfedKtajFnMwcou+bDtEyEau6Y71nw6cWETDs4r5ab5xLfOWPnShn594PzhXYACHgJAPKDKMUPPjfpUlPg6QCCpOz07+1mMiXcFEGu1BwJGDDas4TXAIbICQzyhijFD9uoUFSAb40bq/Nk71r9ebWfAltBmmXEnnhwraRyxy/ABsZkxsYZfvozW87MdxkXPvEGXCwrC7tXKLtLlOHQCVOqW5xBtMzp4X6/B6GvJvfcSWKkRsYpfHoAV97xBT9idhgurT/NT2lnvw/P6lbyLn0ZyrU4c05TOhJ4MHxfD2WMy5hlEz736m2p2TdhYL1r/3rYtuY7hcKE3GTteg8kXLNUqLz/3RXLstRMAASwINL5B5GqdAtf1BHzDAjzCLhJIMPhxZtXKCNGL4EVvYdC0OOWTJ4LVmLeTUT0/tgACS4R65ilK7+XgauQ261Ciej9X/UyGzJnU720SMtPvqbRinRSVc9qGeLjX7X8Gu+PTCg/dGnapW7GCVm9gUyfkuWLaa4zy4YrSLW2qGFD8pxeylr5IbA/tu/1Lhn6yffzwlHJdrKPauJsIbS+w62P6SstdsYpTA2+92abTWf+eKTl6WHKQdrE65awyU8ipcIjKObhRy0iLnva6MdlqhVkP+JUeTpd3tbPbVq5wFGKR81f/jsbFqjABCBxB5pJjhuJiTCNb7yA3ljYkbO2oCbHHYwtNmmZwbbThqohACUHqffPSBn/qP2KkK0j79kO5gCRpBGJdL352qPKJbzqrNSvlk+mCfrZiijvf4uhAQtt7onrXMJMSKfu04qNrtTaIJ6ZO8WTL5hthP3GntV9hKj1GD5o/LmXRnJKnvNSJMK/Say9sjIATTdVavppA4jZMjPEkeGYXwnrgSHJbtebppm+/KYtg9+xEVLU3ylPcYoBS59WJZMzj5M45vu7h1sLnhCIbM73SalvcVa6zq6U53rQOgot2S2u3XOPDcAeu10GXhv5jmlyMF7jFK4IdI0BRtcfGStYgBZCGmN9uauzHaxqhlm5b0EtSroC0YpCv339Yn5cN0ZosKg15mFf/0JKfueD1XyC6M0BRXq1bF5mPrQqZ4XYVNNdKkePmKUGmO+/tPoPExd6rssZQNAR70ql9zgW/H+YpRmsVQ9u19uGrF967QsFsRK0ndXZehXr1t93zFKBTkLYWYn5XqSq8qEbicEIr3VXyx1erCSlJoB2cAoNcJk+MSVuWnQTs3vgD7FWFHcVSaudn0t3g4/vFkLTVsybgd3fKhigRu1Xy9ttWtnAvqInqK/3HYWscnOLGFU1S4Ut2Pg9Gwu69tkUm1OhoZEHxFhxVV3Oy2OZmmsj64jPhlzr85lW3d0YwN0zQSUrYXsVPPGU8Q+JwzAKJXF13PWUDmyLq/v2+85b1MyvrPtmF2dbKjMNpmBUYsLS34pS6fk/sp+trs8ffkscg6cJtf+OH1KX1KYhFEavHe1zO1T2+N0+tLxiQtBf8f9Zcw6vUBrifNy7W4WdaZEbSDoyr1fyKV3m7INOlEdc/Ye4hPOw3+tSIDes8MwORppMIrUy1fnBWqEH95eWOLzpuyrRwmbaSpGrcqyIY79RgQEya9IJey9zG+ivOP22vcBGfpg5pl5lIPZGKXRLJzOvUHtbnO2M84jtuVGtijvnPJx81/8X97U4p/xGLVag8PUwtEqCIorO5C0OJSTiS1ODn1Reowyv30BwSiMZCfnkl/J8vvzQ39GqLIGd2KCctKczkFeGRWa2cvBwajVTnZXvnafbJqlhv78JFWr70EngzunHXOYrO2zOrVK8Chx0DBqsYFJ6ms/km3z8zLVFiws2Zli56qtXLKWKJgYtdi1b70sfkC2zs/L1KTwsWRnxxEy6CHTrJ5J6xz3IMgYtRqDTF38M9n0lBr68xpVpIPRigBotwky6N8MV9sjVU52EXyMWi1jnvruUyrOApSToRaSdWCN++ASdEL9pspVE4I176zRlMjPXMFodYOqZP3LsurXsm9ZzoZdiHRdjQugSSwWjozqc4/0uCmL7p416pX5zxzDaJghhzbKit/J+zPU79wWq5bgpI19pkqvsUkP1Q0zJoh/cxSj1V1RJcRoXjtTtr+kbuQSWC1oMgXvME56jpMuQ4MIPpt1zm2MhpnAFr8ti2XDXNk2q3o/KngNIlmaENDsPEG6j5GO1wTFDp8Js2sHRiMcYrFq9yr5eKFseUEOb642BRi+FmCJTP5v2lXaDZeuw+Xir9YGaEY6rZZhNNJuLjAFbF8mWxfK7nnVwb8BqwkhxIAjG4n4H2pQIu1vkU7DpG2ZCds2QnXy+79ajNFoVrOhiqPu9qyU3YvlwCKlIOP8bUGWZJ4KWguLFig5tAk3+NIh6hC91mUqrq8B24mi+ZSV6zxGE7EdEXtklxzcIAfXy8F3pGKlcFYJALJ2LViQReJalBbBFgpJDBAh66eVW11iK5RJ837SvIc07y5N2uaGRTPUTtf+y2PUDiurpPK0cDgdwP2sQu1iPXFA/TxzVI7vklP7pPKYyuXsEaksV0AEvkUlUthE3SxqJPVbSsO2UrexcARjg1IlGs8vVnDkZxHnmBu2XUdV2iz6fx/wucFRT6eCAAAAAElFTkSuQmCC"
          />
        </defs>
      </>
    ),
  });
};