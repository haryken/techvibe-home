const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export async function comparePage(shell,api){
 const products=(await api('/api/shop/products')).filter(x=>['EMO','Vector','AIBI','Alpha Mini','Loona','Eiliko','Emun'].includes(x.title));
 shell('<main class="wrap customer-page"><div class="micro">TECHVIBE HOME / TƯ VẤN</div><h1>So sánh robot AI</h1><p>Chọn tối đa 3 robot để so sánh. Tính năng có thể khác nhau theo phiên bản phần cứng.</p><div class="compare-controls">'+products.map(p=>'<label><input type="checkbox" value="'+escapeHtml(p.id)+'" '+(['EMO','Vector'].includes(p.title)?'checked':'')+'>'+escapeHtml(p.title)+'</label>').join('')+'</div><div id="compare-result"></div></main>');
 const draw=()=>{
  const checked=[...document.querySelectorAll('.compare-controls input:checked')];
  if(checked.length>3){checked[checked.length-1].checked=false;return}
  const selected=products.filter(p=>checked.some(x=>x.value===p.id));
  const rows=[['Hãng',p=>p.maker||'Chưa cập nhật'],['Loại',p=>p.category||'Chưa cập nhật'],['Giá',p=>p.price?new Intl.NumberFormat('vi-VN').format(p.price)+' ₫':'Liên hệ báo giá'],['Tính năng hãng',p=>p.officialFeatures||'Chưa xác minh'],['Firmware custom',p=>p.customFeatures||'Xác nhận theo từng máy'],['Bảo hành',p=>p.warranty||'Liên hệ xác nhận'],['Bán hàng',p=>p.sellable?'Nhận yêu cầu':'Tạm ngừng']];
  document.querySelector('#compare-result').innerHTML=selected.length?'<div class="compare-scroll"><table class="compare-table"><thead><tr><th>Tiêu chí</th>'+selected.map(p=>'<th><a href="/robot/'+slug(p.title)+'">'+escapeHtml(p.title)+' ↗</a></th>').join('')+'</tr></thead><tbody>'+rows.map(([label,get])=>'<tr><th>'+label+'</th>'+selected.map(p=>'<td>'+escapeHtml(get(p))+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>':'<p>Chọn ít nhất một robot.</p>';
 };
 document.querySelectorAll('.compare-controls input').forEach(x=>x.onchange=draw);draw();
}
export function trackPage(shell,api){
 shell('<main class="wrap customer-page"><div class="micro">TECHVIBE HOME / ĐƠN HÀNG</div><h1>Tra cứu đơn hàng</h1><p>Nhập mã đơn và số điện thoại đã sử dụng khi đặt hàng.</p><form id="track-form"><label>Mã đơn<input name="id" required placeholder="Mã đơn hàng"></label><label>Số điện thoại<input name="phone" required placeholder="Số điện thoại nhận hàng"></label><button class="pill primary">Tra cứu</button></form><div id="track-result" role="status"></div></main>');
 document.querySelector('#track-form').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.currentTarget),out=document.querySelector('#track-result');out.textContent='Đang tra cứu...';try{const r=await api('/api/shop/track',{method:'POST',body:JSON.stringify({id:f.get('id'),phone:f.get('phone')})});out.innerHTML='<div class="detail-notice"><b>Trạng thái: '+escapeHtml(r.status)+'</b><p>Mã đơn: '+escapeHtml(r.id)+'</p><p>Ngày tạo: '+escapeHtml(r.created_at)+'</p><p>'+r.items.map(x=>escapeHtml(x.title)+' × '+Number(x.quantity)).join(', ')+'</p></div>'}catch(err){out.textContent=err.message}};
}
export function warrantyPage(shell){
 shell('<main class="wrap customer-page"><div class="micro">TECHVIBE HOME / HỖ TRỢ</div><h1>Bảo hành & hỗ trợ</h1><p>Thời hạn và điều kiện bảo hành tùy sản phẩm, tình trạng máy và thỏa thuận khi mua. TechVibe Home xác nhận từng trường hợp trước khi tiếp nhận.</p><div class="detail-feature-sections"><div><h3>Chuẩn bị thông tin</h3><p>Tên robot, phiên bản board và firmware, mã đơn, mô tả lỗi và ảnh hoặc video lỗi nếu có.</p></div><div><h3>Liên hệ hỗ trợ</h3><p><a href="https://zalo.me/037511564" target="_blank" rel="noopener noreferrer">Chat Zalo ↗</a></p><p><a href="tel:037511564">Gọi 037511564</a></p></div></div></main>');
}
