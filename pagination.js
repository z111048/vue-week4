// 1. 先建立元件環境
// 2. 把版型加入
// 3. 解除版型內的錯誤

export default {
  props: ["pages", "getProducts"],
  template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li
        class="page-item"
        :class="{
        disabled: !pages.has_pre
        }"
        >
        <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="getProducts(pages.current_page - 1)"
        >
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>
        <li
        class="page-item"
        :class="{
            active:page === pages.current_page
        }"
        v-for="page in pages.total_pages"
        :key="pages + 123"
        >
        <a class="page-link" href="#" @click="getProducts(page)"
            >{{page}}</a
        >
        </li>
        <li
        class="page-item"
        :class="{
        disabled: !pages.has_next
        }"
        >
        <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="getProducts(pages.current_page + 1)"
        >
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
    </ul>
    </nav>
  `,
};
