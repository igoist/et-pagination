let tmpTr = document.querySelector('.hidden tbody').innerHTML;
let str = '';
for (let i = 0; i < 100; i++) {
    str += tmpTr;
}

let tmpTbody = document.querySelector('.hidden tbody');
tmpTbody.innerHTML = str;


const hb = Array.apply(null, document.querySelectorAll('.hidden tr'));
const perPage = 10;
let liveTotal = [];
let page = 1; // 页码，字面意思，page >= 1, 而使用时，一般为 liveTotal[page-1]
let pageCount = 0;

// // 初始化首页 live rows
const initLiveTotal = (p, t, h) => {
    for (let i = 0; i * p < h.length; i++) {
        t.push(h.slice(i * p, (i + 1) * p));
        pageCount++;
    }
};
console.log(pageCount);

initLiveTotal(perPage, liveTotal, hb);

// const tbodyReplace = (rows, p='.hb-content-wrap tbody', b='<tbody></tbody>') => {
//     let box = $(b);
//     box.append(rows);
//     $(p).replaceWith(box);
// };

console.log(liveTotal[0][0]);
console.log(liveTotal[0][0].nodeType);

// console.log(NodeList.apply(null, liveTotal[page-1]));
// document.querySelector('#content-wrap tbody').appendChild(liveTotal[page-1]);

/**
 * 花瓣新一代分页组件 :)
 */
// const initPagination = (c) => {

//     // DOM 部分初始化
//     let fragment = $('<ul class="hb-pagination-wrap"></ul>');

//     let prevPage = $('<li class="hb-pagination-prev" title="Previous Page" aria-disabled="false"><a><</a></li>');
//     let nextPage = $('<li class="hb-pagination-next" title="Next Page" aria-disabled="false"><a>></a></li>');

//     fragment.append(prevPage);

//     for (let i = 1; i <= c; i++) {
//         let li = $('<li class="hb-pagination-item" title="' + i + '" tabindex="0"><a>' + i + '</a></li>');
//         li.on('click', () => {
//             page = i;
//             $('.hb-pagination-wrap').children().removeClass('hb-pagination-item-active');
//             li.addClass('hb-pagination-item-active');
//             tbodyReplace(liveTotal[i-1]);
//         });
//         fragment.append(li);
//     }
//     // console.log(fragment.children());
//     fragment.append(nextPage);

//     $('.hb-pagination-wrap').replaceWith(fragment);
//     $('.hb-pagination-wrap').children()[page].classList.add('hb-pagination-item-active');
//     // 以上为 DOM 初始化

//     $('.hb-pagination-prev').on('click', () => {
//         if ((page - 1) > 0) {
//             $('.hb-pagination-wrap').children()[page].classList.remove('hb-pagination-item-active');
//             page--;
//             $('.hb-pagination-wrap').children()[page].classList.add('hb-pagination-item-active');
//             tbodyReplace(liveTotal[page-1]);
//         }
//     });

//     $('.hb-pagination-next').on('click', () => {
//         if ((page + 1) <= pageCount) {
//             $('.hb-pagination-wrap').children()[page].classList.remove('hb-pagination-item-active');
//             page++;
//             $('.hb-pagination-wrap').children()[page].classList.add('hb-pagination-item-active');
//             tbodyReplace(liveTotal[page-1]);
//         }
//     });

//     // 这段代码要用的，等 page > 10 就应该有这种跳转
//     // $('#hb-pagination-goto').on('change', () => {
//     //     let filterText = $('#hb-pagination-goto').val();
//     //     if (filterText == '') {
//     //         return;
//     //     } else {
//     //         let f = parseInt(filterText);
//     //         if (!isNaN(filterText) && f <= c && f > 0) {
//     //             // console.log('It is: ' + parseInt(filterText));
//     //             tbodyReplace(liveTotal[f - 1]);
//     //         }
//     //     }
//     // });

// };

// initPagination(pageCount);