import { Component, OnInit,Input ,OnChanges,Output} from '@angular/core';
import { CropperService }                           from '../../../shared/service/cropper.service';
import { Injectable , EventEmitter}                 from '@angular/core';
import swal from 'sweetalert2'
declare var $:any;
import  "assets/js/cropper.js";
@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit,OnChanges {
@Input()
upImage:any
public imgUrl:any 
@Output()
 base64URl = new EventEmitter();

public data:any
  constructor(public CropperService:CropperService) {
  		// let ImgUrl = this.CropperService.init(this.upImage)
  		// console.log('---111--',ImgUrl)
   }

  ngOnInit() {
  	// this.init(this.upImage)

  }
  ngOnChanges(){
    this.imgUrl = this.upImage
    this.init(this.upImage)
  }

  init(upImage){
    // this.base64URl.emit(false)
    let _this = this
    console.log('------启动裁剪--------')
    $(function (upImage) {
      console.log(this.data)
      // var console = window.console;
      var URL = window.URL;
      var $image = $('#image');
      var $download = $('#download');
      var $dataX = $('#dataX');
      var $dataY = $('#dataY');
      var $dataHeight = $('#dataHeight');
      var $dataWidth = $('#dataWidth');
      var $dataRotate = $('#dataRotate');
      var $dataScaleX = $('#dataScaleX');
      var $dataScaleY = $('#dataScaleY');
      var $aspectRatio = $(".aspectRatio");
      var options = {
            aspectRatio: 16 / 9,
            preview: '.img-preview',
            crop: function (e) {
              $dataX.val(Math.round(e.detail.x));
              $dataY.val(Math.round(e.detail.y));
              $dataHeight.val(Math.round(e.detail.height));
              $dataWidth.val(Math.round(e.detail.width));
              $dataRotate.val(e.detail.rotate);
              $dataScaleX.val(e.detail.scaleX);
              $dataScaleY.val(e.detail.scaleY);
            }
          };
      // var originalImageURL = $image.attr('src');
      var originalImageURL = upImage;
      var uploadedImageName = 'cropped.jpg';
      var uploadedImageType = 'image/jpeg';
      var uploadedImageURL;
      console.log(originalImageURL)
      if(upImage){
        // uploadedImageURL = upImage
      }

      // Tooltip
      // $('[data-toggle="tooltip"]').tooltip();


      // Cropper
      $image.on({
        ready: function (e) {
          console.log(e.type);
        },
        cropstart: function (e) {
          console.log(e.type, e.detail.action);
        },
        cropmove: function (e) {
          console.log(e.type, e.detail.action);
        },
        cropend: function (e) {
          console.log(e.type, e.detail.action);
        },
        crop: function (e) {
          console.log(e.type);
        },
        zoom: function (e) {
          console.log(e.type, e.detail.ratio);
        }
      }).cropper(options);


      // Buttonsv
      if (!$.isFunction(document.createElement('canvas').getContext)) {
        $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
      }

      if (typeof document.createElement('cropper').style.transition === 'undefined') {
        $('button[data-method="rotate"]').prop('disabled', true);
        $('button[data-method="scale"]').prop('disabled', true);
      }


      // Download
      // if (typeof $download[0].download === 'undefined') {
      //   $download.addClass('disabled');
      // }


      // Options
      $('.docs-toggles').on('change', 'input', function () {
        var $this = $(this);
        var name = $this.attr('name');
        var type = $this.prop('type');
        var cropBoxData;
        var canvasData;

        if (!$image.data('cropper')) {
          return;
        }

        if (type === 'checkbox') {
          options[name] = $this.prop('checked');
          cropBoxData = $image.cropper('getCropBoxData');
          canvasData = $image.cropper('getCanvasData');

          // options.ready = function () {
          //   $image.cropper('setCropBoxData', cropBoxData);
          //   $image.cropper('setCanvasData', canvasData);
          // };
        } else if (type === 'radio') {
          options[name] = $this.val();
          $aspectRatio.each(function(i,v){
            if($(v).hasClass('active')){
             $(v).removeClass('active')
            }
            
          })
          $this.parent('label').addClass('active')
        }

        $image.cropper('destroy').cropper(options);
      });


      // Methods
      $('.docs-buttons').on('click', '[data-method]', function () {
        var $this = $(this);
        var data = $this.data();
        var cropper = $image.data('cropper');
        var cropped;
        var $target;
        var result;

        if ($this.prop('disabled') || $this.hasClass('disabled')) {
          return;
        }

        if (cropper && data.method) {
          data = $.extend({}, data); // Clone a new one

          if (typeof data.target !== 'undefined') {
            $target = $(data.target);

            if (typeof data.option === 'undefined') {
              try {
                data.option = JSON.parse($target.val());
              } catch (e) {
                console.log(e.message);
              }
            }
          }

          cropped = cropper.cropped;

          switch (data.method) {
            case 'rotate':
              if (cropped) {
                $image.cropper('clear');
              }

              break;

            case 'getCroppedCanvas':
              if (uploadedImageType === 'image/jpeg') {
                if (!data.option) {
                  data.option = {};
                }

                data.option.fillColor = '#fff';
              }

              break;
          }

          result = $image.cropper(data.method, data.option, data.secondOption);

          switch (data.method) {
            case 'rotate':
              if (cropped) {
                $image.cropper('crop');
              }

              break;

            case 'scaleX':
            case 'scaleY':
              $(this).data('option', -data.option);
              break;

            case 'getCroppedCanvas':
              if (result) {
                // Bootstrap's Modal
                // console.log(111,$('#getCroppedCanvasModal'),result)
                // $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
                
                // if (!$download.hasClass('disabled')) {
                  
                  // download.download = uploadedImageName;
                  // uploadedImageName ='cropped.jpg'
                  // $download.attr('href', result.toDataURL(uploadedImageType));
                  result.toDataURL(uploadedImageType)
                  // console.log(result.toDataURL())
                  // this.data = result.toDataURL()
                   _this.base64URl.emit(result.toDataURL());
                    $image.cropper('clear');
                    $image.cropper('destroy')
                   // URL.revokeObjectURL(uploadedImageURL);
                   uploadedImageURL = null;
                   originalImageURL = null;
                   _this.imgUrl = null;
                   _this.upImage = null;
                   // $image.attr('src', uploadedImageURL);
                  // return result.toDataURL()
                   // $download.attr('href', result.toBlob();
                // }
              }

              break;

            case 'destroy':
              if (uploadedImageURL) {
                URL.revokeObjectURL(uploadedImageURL);
                uploadedImageURL = '';
                $image.attr('src', originalImageURL);
              }

              break;
          }

          if ($.isPlainObject(result) && $target) {
            try {
              $target.val(JSON.stringify(result));
            } catch (e) {
              console.log(e.message);
            }
          }

        }
      });


      // Keyboard
      $(document.body).on('keydown', function (e) {

        if (!$image.data('cropper') || this.scrollTop > 300) {
          return;
        }

        switch (e.which) {
          case 37:
            e.preventDefault();
            $image.cropper('move', -1, 0);
            break;

          case 38:
            e.preventDefault();
            $image.cropper('move', 0, -1);
            break;

          case 39:
            e.preventDefault();
            $image.cropper('move', 1, 0);
            break;

          case 40:
            e.preventDefault();
            $image.cropper('move', 0, 1);
            break;
        }

      });


      // Import image
      var $inputImage = $('#inputImage');

      if (URL) {
        
        $inputImage.change(function () {
          var files = this.files;
          var file;
          console.log(files)
          if (!$image.data('cropper')) {
            return;
          }

          if (files && files.length) {
            file = files[0];

            if (/^image\/\w+$/.test(file.type)) {
              uploadedImageName = file.name;
              uploadedImageType = file.type;

              if (uploadedImageURL) {
                console.log(1)
                URL.revokeObjectURL(uploadedImageURL);
              }

              uploadedImageURL = URL.createObjectURL(file);
              $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
              $inputImage.val('');
            } else {
              // window.alert('请选择一张图片');
                swal({
                  title:"格式错误！", 
                  text:"请选择.jpg/.png/.jpge/.tiff等常用格式！", 
                  type:"warning",
                  timer: 1000
                }); 
            }
          }
        });
      } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
      }

    });

  }

}
