import { Component, OnInit,ElementRef,Renderer} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( 
  	private el:ElementRef,
    private Renderer:Renderer) { }

  ngOnInit() {
  }
  showhide () {
    var ibox = $(this.el.nativeElement).closest('div.panel-inverse');
    var icon = $(this.el.nativeElement).find('i:first');
    var content = ibox.children('.panel-body');
    content.slideToggle(200);
    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    $.timeout(function () {
        ibox.resize();
        ibox.find('[id^=map-]').resize();
    }, 50);
}
    fullscreen() {
      // var ibox = $(this.el.nativeElement).closest('div.panel-inverse');
      // var button =$(this.el.nativeElement).find('i.fa-expand');
      // console.log(ibox,button)
      // $('body').toggleClass('fullscreen-ibox-mode');
      // button.toggleClass('fa-expand').toggleClass('fa-compress');
      // ibox.toggleClass('fullscreen');
      // setTimeout(function() {
      //     $(window).trigger('resize');
      // }, 100);

        var target = $(this).closest('.panel');
        var targetBody = $(target).find('.panel-body');
        var targetTop = 40;
        if ($(targetBody).length !== 0) {
            var targetOffsetTop = $(target).offset().top;
            var targetBodyOffsetTop = $(targetBody).offset().top;
            targetTop = targetBodyOffsetTop - targetOffsetTop;
        }
        
        if ($('body').hasClass('panel-expand') && $(target).hasClass('panel-expand')) {
            $('body, .panel').removeClass('panel-expand');
            $('.panel').removeAttr('style');
            $(targetBody).removeAttr('style');
        } else {
            $('body').addClass('panel-expand');
            $(this).closest('.panel').addClass('panel-expand');
            
            if ($(targetBody).length !== 0 && targetTop != 40) {
                var finalHeight = 40;
                $(target).find(' > *').each(function() {
                    var targetClass = $(this).attr('class');
                    
                    if (targetClass != 'panel-heading' && targetClass != 'panel-body') {
                        finalHeight += $(this).height() + 30;
                    }
                });
                if (finalHeight != 40) {
                    $(targetBody).css('top', finalHeight + 'px');
                }
            }
        }
        $(window).trigger('resize');
    }
   closebox  () {
        var ibox =  $(this.el.nativeElement).closest('div.ibox');
        ibox.remove();
    }
}
