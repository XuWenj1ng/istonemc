
// import Vue from 'vue'
export default {
  

	isSystem(value) {
		if (value == undefined) {
			return true;
		}
		if (value.indexOf(this.system) >= 0) {
			return false;
		}
		return true;
	},
	removeTab(targetName) {

		let tabs = this.editableTabs;
		let activeName = this.editableTabsValue;
		if (activeName === targetName) {
			tabs.forEach((tab, index) => {
				if (tab.name === targetName) {
					let nextTab = tabs[index + 1] || tabs[index - 1];

					if (nextTab) {

						activeName = nextTab.name;
					}
				}
			});
		}
		var currentPath = this.currentPath;
		var editableTabs = this.editableTabs;
		var this_ = this;
		if (editableTabs.length > 1) {
			editableTabs.find(function(d, i) {
				if (d.name == targetName && d.path == currentPath) {


					var path='';
					if (editableTabs[i - 1] == undefined) {
						path = editableTabs[i + 1].path;
					}else{
						path = editableTabs[i - 1].path;
					}

					this_.history(path);
				}
			})
		} else {
			this.tabIndex = 0;
			this.history('/index');
		}

		this.editableTabsValue = activeName;
		this.editableTabs = tabs.filter(tab => tab.name !== targetName);
		this.localStorageTabs();
	},
	//点击标签跳转
	handleClick() {
		if (this.editableTabsValue == 0) {
			this.history('/index');
			return;
		}
		var path = '';
		var editableTabsValue = this.editableTabsValue;
		this.editableTabs.find(function(d) {
			if (d.name == editableTabsValue) {
				path = d.path;
			}
		})
		if (path != '') {
			this.history(path);
		}

	},
	/* 添加标签 */
	addTab(b) {
		let newTabName = (++this.tabIndex) + '';
		this.editableTabs.push({
			title: b.name,
			name: newTabName,
			content: '',
			path: b.path
		});
    if(this.editableTabs.length==10){
      let arr=this.editableTabs;
      arr.splice(0,1);
      this.editableTabs=arr;
      console.log('删除一个');
    }
		this.localStorageTabs();
		this.editableTabsValue = newTabName;
	},
	//显示当前标签
	showTab(i) {
		this.editableTabsValue = i.name;
	},
	//本地存储标签数据
	localStorageTabs() {
		localStorage.setItem('editableTabs'+this.system, JSON.stringify(this.editableTabs));
		localStorage.setItem('tabIndex'+this.system, JSON.stringify((this.tabIndex==null?0:this.tabIndex)));

	},
  //获取二级页面数据
  getTwoPageData(){
    var data=this.$router.options.routes;

    for(var i=0;i<data.length;i++){
      for(var j=0;j<data[i].children.length;j++){
        var children=data[i].children[j];
        if(children.hidden==true){
          if(children.brightPath!=undefined){
             this.highlight.push({
               name: children.name,
               path: children.path,
               brightPath: children.brightPath,
             })
          }else{
            console.error('没有添加');
          }
        }
      }
    }
  }
}
