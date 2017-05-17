export const srcVueTemplateHtml = `<ul class="pagination"><li v-for="page in pages" :key="page.text"><span v-if="page.disabled">{{page.text}}</span><a v-else href="javascript:void(0)" @click="jumpTo(page.value)">{{page.text}}</a></li></ul>`;
