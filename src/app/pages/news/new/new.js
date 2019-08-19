
<div class="panel panel-inverse" data-sortable-id="ui-general-1">
		<div class="panel-heading" >
			<app-table></app-table>
		<div >
				<!-- <ul class="nav nav-tabs nav-tabs-inverse" >
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('generalTab')" [ngClass]="{ 'active': tabs.generalTab }">
							<i class="fa fa-fw fa-lg fa-cogs"></i> <span class="d-none d-lg-inline">&nbsp;热门</span></a></li>
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('widthAndHeightTab')" [ngClass]="{ 'active': tabs.widthAndHeightTab }">
							<i class="fa fa-fw fa-lg fa-arrows-alt-h"></i> <span class="d-none d-lg-inline">&nbsp;新闻</span></a></li>
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('textAndFontTab')" [ngClass]="{ 'active': tabs.textAndFontTab }">
							<i class="fa fa-fw fa-lg fa-text-width"></i> <span class="d-none d-lg-inline">&nbsp;行业</span></a></li>
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('marginTab')" [ngClass]="{ 'active': tabs.marginTab }">
							<i class="fa fa-fw fa-lg fa-arrows-alt"></i> <span class="d-none d-lg-inline">&nbsp;文化</span></a></li>
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('paddingTab')" [ngClass]="{ 'active': tabs.paddingTab }">
							<i class="fa fa-fw fa-lg fa-expand"></i> <span class="d-none d-lg-inline">&nbsp;产品</span></a></li>
					<li class="nav-item">
						<a href="javascript:;" class="nav-link" (click)="showTab('backgroundColorTab')" [ngClass]="{ 'active': tabs.backgroundColorTab }"><i class="fa fa-fw fa-lg fa-paint-brush"></i> <span class="d-none d-lg-inline">&nbsp;知识</span></a></li>
					<li class="nav-item" >
						<a href="javascript:;" class="nav-link" (click)="showTab('textColorTab')" [ngClass]="{ 'active': tabs.textColorTab }"><i class="fa fa-fw fa-lg fa-font text-gradient bg-gradient-purple"></i> <span class="d-none d-lg-inline">&nbsp;原创</span></a></li>
				</ul> -->
				<!-- <div style="clear: both"></div> -->
				
</div>
<style type="text/css">
	.panel-heading .nav-tabs {
    margin-top: 0px;
    margin-right: 0px;
}
</style>
</div>
<!-- end nav-tabs -->
<div class="panel-body">
<!-- begin tab-content -->
<app-news-btn></app-news-btn>
<button nz-button nzType="primary" style="margin-right: 8px">新增</button>
<button nz-button nzType="primary" style="margin-right: 8px">发布</button>
<button nz-button nzType="primary" >置顶</button>
<div class="tab-content">
	<!-- begin tab-pane -->
	<div class="tab-pane fade active show" [ngClass]="{ 'active show': tabs.generalTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.widthAndHeightTab }">
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.textAndFontTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.marginTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.paddingTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.backgroundColorTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
	<!-- begin tab-pane -->
	<div class="tab-pane fade" [ngClass]="{ 'active show': tabs.textColorTab }">
		<!-- begin table-responsive -->
		<div class="table-responsive">
			<app-new-table ></app-new-table>
		</div>
		<!-- end table-responsive -->
	</div>
	<!-- end tab-pane -->
</div>
<!-- end tab-content -->
</div>
</div>
