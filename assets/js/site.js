Site = {
	photo_div: "#student_photos",
	photo_user_choice_div: "#votes_made",
	photo_current: "",
	photo_column: "",
	xmlRequest: null,
	init: function(){
		this.photo_init();
	},
	photo_hover_in: function(e){
		$(e).unbind('mouseenter').unbind('mouseleave').closest('li').bind({
			mouseleave: function(e){
				Site.photo_pop_out(this);
			}
		}).find('div.photo_hover').stop().show().find('div.like_area a').bind('click',Site.photo_click);
	},
	photo_hover_out: function(e){
		$(e).parents('li').find('div.photo_hover').stop().hide();
	},
	photo_pop_out: function(obj){

		$(obj).unbind('mouseleave').find('div.photo_hover').hide().find('div.like_area a').unbind('click');
		Site.photo_bind_popover($(obj).closest('li').find('img'));
	},
	photo_click: function(){
		Site.photo_current = $(this).data("imageid");
		Site.photo_store_selection();
	},
	photo_store_selection: function(){
		Site.xmlRequest = $.ajax({
			type : "post",
			url : "inc/ajax/vote_respond.php",
			dataType : "JSON",
			data : "v="+Site.photo_current,
			success: function(data){
				Site.photo_complete(data);
			}
		});
	},
	photo_complete: function(json){
		if(json.response == 'complete')
		{
			Site.photo_column = json.column;
			Site.photo_vote_update();
		}
	},
	photo_vote_update: function(){
		$(Site.photo_user_choice_div+" article:nth-child("+Site.photo_column+")").html('written');
	},
	photo_bind_popover: function(obj){
		$(obj).bind({
			mouseenter: function(e){
				Site.photo_hover_in(this);
			},
			mouseleave: function(e){
				Site.photo_hover_out(this);
			}
		});
	},
	photo_init: function(){
		$(Site.photo_div).find('img').each(function(){
			Site.photo_bind_popover(this);
		});
	}
}
